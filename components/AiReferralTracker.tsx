"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { detectAiReferralSource, pushAiReferralToDataLayer } from "@/lib/ai-referral";

export default function AiReferralTracker() {
  useEffect(() => {
    const source = detectAiReferralSource(document.referrer);
    if (!source) return;

    track("ai_referral", { source });
    pushAiReferralToDataLayer(source);
  }, []);

  return null;
}
