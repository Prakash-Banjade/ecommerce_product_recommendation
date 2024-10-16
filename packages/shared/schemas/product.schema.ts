import { ECategory } from '../../shared/interfaces/categories.type';
import { z } from 'zod';
import { defaultQueryParamSchema } from './default-query-param.schema';

export const vectorProductSchema = z.object({
    _id: z.string().uuid(),
    title: z.string(),
    description: z.string().optional(),
    price: z.number().min(0),
    featured_image: z.string().url().optional(),
    category: z.nativeEnum(ECategory),
    rating: z.number().min(0).max(5),
    actual_price: z.number().min(0),
    discounted_price: z.number().min(0),
    discount: z.number().min(0),
    stock_quantity: z.number().int().min(0).optional(),
    sku: z.string().optional(),
    seller: z.string().optional(),
    brand: z.string().optional(),
    review_count: z.number().int().min(0).optional(),
    $vectorize: z.string().optional().optional(),
    $vector: z.array(z.number()).optional(),
})

export type TVectorProduct = z.infer<typeof vectorProductSchema>


export const vectorProductsArraySchema = z.array(z.object({
    _id: z.string().uuid(),
    title: z.string(),
    category: z.nativeEnum(ECategory),
    rating: z.number().min(0).max(5),
    price: z.number().min(0),
    actual_price: z.number().min(0),
    discounted_price: z.number().min(0),
    featured_image: z.string().url().optional(),
    discount: z.number().min(0),
}))

export type TVectorProductsArray = z.infer<typeof vectorProductsArraySchema>;


export const similarProductQuerySchema = z.object({
    vector: z.array(z.number()),
}).merge(defaultQueryParamSchema).merge(z.object({
    take: z.number().min(1).max(100).optional().default(11),
}));

export type TSimilarProductQuery = z.infer<typeof similarProductQuerySchema>;