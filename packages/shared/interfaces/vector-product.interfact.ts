import { ECategory } from "./categories.type";

export interface IVectorProduct {
    _id: string;
    $vectorize: string;
    $vector: Array<number>;
    title: string;
    description: string;
    category: ECategory,
    rating: number,
    price: number,
    actual_price: number,
    discounted_price: number,
    discount: number,
    stock_quantity: number,
    sku: string,
    seller: string,
    brand: string,
    review_count: number
    Metascore: string;
    featured_image?: string;
};

export type ISimilarProduct = {
    $similarity: number;
} & IVectorProduct;