import React from 'react'
import ProductsList from './products-list'
import { trpc } from '../../trpc';
import { THomePageProps } from '../../app/page';

export default async function HomeMainSection({ searchParams }: THomePageProps) {
    const products = await trpc.products.getAll.query({ take: 20, search: decodeURI(searchParams.search) });

    return (
        <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <ProductsList products={products ?? []} />
                </div>
            </section>
        </main>
    )
}