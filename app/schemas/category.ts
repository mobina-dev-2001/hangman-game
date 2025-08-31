import { z } from 'zod';

export const CategorySchema = z.object({
  name: z.string(),
  wordCount: z.number(),
});

export type Category = z.infer<typeof CategorySchema>;

export const CategoriesResponseSchema = z.object({
  data: z.array(CategorySchema),
});
