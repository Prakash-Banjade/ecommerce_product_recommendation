import React from 'react'
import { trpc } from '../../trpc';
import { SingleProductPageProps } from '../../app/products/[id]/page';

export default async function SimilarProductsSection({ vector }: { vector: number[] }) {
    const products = await trpc.products.getSimilarProducts.query('shoes');

    // console.log(products)

    return (
        <section className='container px-4 my-8'>
            <h3 className='font-bold text-xl'>Similar products you may like</h3>
        </section>
    )
}