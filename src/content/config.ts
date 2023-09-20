import { defineCollection, z } from "astro:content";
import { zonedTimeToUtc } from "date-fns-tz";

//スキーマを定義
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string().transform((str) => zonedTimeToUtc(str, "Asia/Tokyo")),
    image: z.string(),
    category: z.array(z.string()),
    description: z.string(),
  }),
});

//定義したスキーマをcollectionとしてエクスポート
export const collection = {
  blog: blogCollection,
};
