import type { MetadataRoute } from "next";

const BASE_URL = "https://thesharkretail.com";

const routes: string[] = [
  "/",
  "/about",
  "/contact",
  "/ecommerce-automation",
  "/automation/amazon",
  "/automation/shopify",
  "/automation/tiktok",
  "/automation/walmart",
  "/automation/etsy",
  "/services/account-reinstatement",
  "/services/virtual-assistant",
  "/services/product-hunting",
  "/services/content-creation",
  "/services/digital-marketing",
  "/services/amazon-ppc-management",
  "/services/ppc-management",
  "/services/keyword-research",
  "/thank-you",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${BASE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}

