import type { Metadata } from "next";
import { Roboto, Roboto_Slab } from "next/font/google";
import { VercelToolbar } from "@vercel/toolbar/next";
import { Analytics } from "@vercel/analytics/next"
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const title = "No-Cost Career Fair | Washoe County | Aug 24, 2026";
const description =
  "Northern Nevada's largest no-cost career fair. Monday, August 24, 2026, 11am–2pm at the Reno-Sparks Convention Center. 90+ employers hiring on the spot.";

// Update NEXT_PUBLIC_SITE_URL once the production domain is assigned.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    type: "website",
    siteName: "Washoe County No-Cost Career Fair",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const shouldInjectToolbar = process.env.NODE_ENV === "development";
  // VERCEL_ENV (not NODE_ENV) is unset locally and "preview" on Preview
  // deploys, so this only fires GTM on the real Production deployment.
  const isProd = process.env.VERCEL_ENV === "production";

  return (
    <html
      lang="en"
      className={`${roboto.variable} ${robotoSlab.variable} h-full antialiased`}
    >
      {isProd && <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />}
      <body className="min-h-dvh flex flex-col font-sans">
        {isProd && (
          // next/third-parties' GoogleTagManager only injects the init
          // script — GTM's noscript fallback isn't part of that component,
          // so it's added manually here per Google's placement guidance
          // (immediately after the opening <body> tag).
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {children}
        <Analytics />
        {shouldInjectToolbar && <VercelToolbar />}
      </body>
    </html>
  );
}
