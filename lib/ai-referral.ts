const AI_REFERRER_HOSTS: Record<string, string> = {
  "chatgpt.com": "chatgpt",
  "chat.openai.com": "chatgpt",
  "perplexity.ai": "perplexity",
  "www.perplexity.ai": "perplexity",
  "gemini.google.com": "gemini",
  "copilot.microsoft.com": "copilot",
  "claude.ai": "claude",
};

export function detectAiReferralSource(referrer: string): string | null {
  if (!referrer) return null;

  let url: URL;
  try {
    url = new URL(referrer);
  } catch {
    return null;
  }

  const host = url.hostname.toLowerCase();
  if (AI_REFERRER_HOSTS[host]) return AI_REFERRER_HOSTS[host];

  // Bing hosts both plain search and Copilot chat; only the chat surface
  // counts as an AI-answer referral.
  if (host === "www.bing.com" && url.pathname.startsWith("/chat")) {
    return "copilot";
  }

  return null;
}

// window.dataLayer is already declared by @next/third-parties' google.d.ts
// as `Object[] | undefined` — match that type instead of redeclaring it.
declare global {
  interface Window {
    dataLayer?: Object[];
  }
}

export function pushAiReferralToDataLayer(source: string) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: "ai_referral", ai_source: source });
}
