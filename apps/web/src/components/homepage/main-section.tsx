import React from 'react'
import ProductsList from './products-list'
import { IVectorProduct } from '../../../../../packages/interfaces/vector-product.interfact'
import { ECategory } from '../../../../../packages/interfaces/categories.type'

type Props = {}

const products: IVectorProduct[] = [
    {
        _id: "hire",
        "title": "Durable 50L Waterproof Hiking Backpack with Multiple Compartments and Adjustable Straps",
        "description": "This durable waterproof hiking backpack offers a spacious 50L capacity, perfect for long outdoor adventures. Equipped with multiple compartments for easy organization and adjustable straps for a comfortable fit, it ensures convenience and durability. Designed for outdoor enthusiasts, this backpack is ideal for carrying essential gear in all weather conditions. Its water-resistant material protects your belongings, making it an excellent choice for hiking, camping, and travel. Brand: AdventureGear, Rating: 4.8, Discount: 12%, Stock: 80 units.",
        "category": ECategory.Sports,
        "rating": 4.8,
        "price": 89.99,
        "actual_price": 102.26,
        "discounted_price": 89.99,
        "discount": 12,
        "stock_quantity": 80,
        "sku": "WHP12345",
        "seller": "AdventureGear",
        "brand": "AdventureGear",
        "review_count": 240,
        "$vector": [55, 33],
        "$vectorize": "description",
        "Metascore": "33",
    },
    {
        _id: "praksh",
        "title": "Insulated Stainless Steel Water Bottle with 24-Hour Cold and 12-Hour Hot Retention",
        "description": "This stainless steel water bottle is designed to keep your drinks cold for up to 24 hours and hot for 12 hours. Featuring a double-walled, vacuum-insulated design, it’s perfect for outdoor activities, office use, or workouts. Its durable, leak-proof construction ensures that your beverage stays secure and at the right temperature. The sleek design fits most cup holders and is BPA-free, making it a healthy and convenient hydration option. Brand: HydroSip, Rating: 4.7, Discount: 10%, Stock: 300 units.",
        "category": ECategory.KitchenAppliances,
        "rating": 4.7,
        "price": 24.99,
        "actual_price": 27.77,
        "discounted_price": 24.99,
        "discount": 10,
        "stock_quantity": 300,
        "sku": "SSWB12345",
        "seller": "HydroSip",
        "brand": "HydroSip",
        "review_count": 175,
        "$vector": [55, 33],
        "$vectorize": "description",
        "Metascore": "33",
    },
]

export default function HomeMainSection({ }: Props) {
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