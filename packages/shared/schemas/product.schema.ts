import { ECategory } from '../../shared/interfaces/categories.type';
import { z } from 'zod';

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
    discount: z.any(),
    stock_quantity: z.number().int().min(0),
    sku: z.string(),
    seller: z.string(),
    brand: z.string(),
    review_count: z.number().int().min(0),
    $vectorize: z.string().optional(),
    $vector: z.array(z.number()),
})

export const vectorProductsArraySchema = z.array(vectorProductSchema)

export type TVectorProduct = z.infer<typeof vectorProductSchema>

export type TVectorProductsArray = z.infer<typeof vectorProductsArraySchema>