import { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://drtaruna.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date("2026-06-26"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE}/#about`,
      lastModified: new Date("2026-06-26"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/#services`,
      lastModified: new Date("2026-06-26"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/#referral`,
      lastModified: new Date("2026-06-26"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/#contact`,
      lastModified: new Date("2026-06-26"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
