import { z } from 'zod';

export const defaultQueryParamSchema = z.object({
    page: z.number().optional().default(1),
    take: z.number().optional().default(10),
    search: z.string().optional(),
})

export type TDefaultQueryParam = z.infer<typeof defaultQueryParamSchema>;