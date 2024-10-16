import React from 'react'
import { trpc } from '../../trpc';
import { ProductCardMini } from '../homepage/product-card-mini';

export default async function SimilarProductsSection({ productId }: { productId: string }) {
    const products = await trpc.products.getSimilarProducts.query({ productId: productId });

    return (
        <section className='container px-4 my-8'>
            <h3 className='font-bold text-xl'>Similar products you may like</h3>

            <div className="mt-8 flex flex-wrap gap-4">
                {products.map((product) => (
                    <ProductCardMini product={product} key={product._id} />
                ))}
            </div>
        </section>
    )
}