export interface IVectorProduct {
    _id: string;
    $vectorize: string;
    $vector: Array<number>;
    Metascore: string;
};

export type ISimilarProduct = {
    $similarity: number;
} & IVectorProduct;