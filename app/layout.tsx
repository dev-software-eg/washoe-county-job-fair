import type { Metadata } from "next";
import { Roboto, Roboto_Slab } from "next/font/google";
import { VercelToolbar } from "@vercel/toolbar/next";
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

  return (
    <html
      lang="en"
      className={`${roboto.variable} ${robotoSlab.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans">
        {children}
        {shouldInjectToolbar && <VercelToolbar />}
      </body>
    </html>
  );
}
