import React from 'react'
import { ProductCard } from './product-card'
import { IVectorProduct } from '../../../../../packages/interfaces/vector-product.interfact'

type Props = {
    products: IVectorProduct[]
}

export default function ProductsList({ products }: Props) {
    return <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
            <ProductCard product={product} key={product.title} />
        ))}
    </div>
}

