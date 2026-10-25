import type { MetadataRoute } from "next";
import { profile } from "@/src/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: profile.siteUrl,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${profile.siteUrl}${profile.photo}`],
    },
  ];
}
