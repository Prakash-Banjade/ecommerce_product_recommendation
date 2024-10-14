import React from 'react'
import ProductsList from './products-list'
import { trpc } from '../../app/trpc';
type Props = {}

export default async function HomeMainSection({ }: Props) {
    const products = await trpc.products.getAll.query({ take: 20 });
    console.log(products)

    return (
        <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <ProductsList products={products} />
                </div>
            </section>
        </main>
    )
}