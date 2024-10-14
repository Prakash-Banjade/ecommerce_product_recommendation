import React from 'react'
import { ProductCard } from './product-card'
import { TVectorProductsArray } from 'packages/shared/schemas/product.schema'

type Props = {
    products: TVectorProductsArray
}

export default function ProductsList({ products }: Props) {
    return <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
            <ProductCard product={product} key={product.title} />
        ))}
    </div>
}

