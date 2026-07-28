import type { MetadataRoute } from "next";

// Update NEXT_PUBLIC_SITE_URL once the production domain is assigned.
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
