import Image from "next/image"
import { Star, ShoppingCart, Heart } from "lucide-react"
import { Badge } from "apps/web/src/components/ui/badge"
import { Button } from "apps/web/src/components/ui/button"
import { trpc } from "apps/web/src/trpc"
import SimilarProductsSection from "apps/web/src/components/single-product-page.tsx/similar-products-section"
import { Suspense } from "react"
import SingleProductLoading from "apps/web/src/components/single-product-page.tsx/single-product-loading"
import { TVectorProduct } from "packages/shared/schemas/product.schema"
import SimilarProductsLoading from "apps/web/src/components/single-product-page.tsx/similar-products-loading"

export type SingleProductPageProps = {
    params: {
        id: string
    }
}

export default async function SingleProductPage({ params }: SingleProductPageProps) {
    const product = await trpc.products.getById.query(params.id);

    if (!product) return <div>Product not found</div>;

    return (
        <>
            <CurrentProductSection product={product} />
            <Suspense fallback={<SimilarProductsLoading />}>
                <SimilarProductsSection vector={product.$vector ?? []} />
            </Suspense>
        </>
    )
}

export async function CurrentProductSection({ product }: { product: TVectorProduct }) {

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="relative aspect-square">
                        <Image
                            src={product.featured_image ?? '/placeholder.avif'}
                            alt={product.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                </div>
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold">{product.title}</h1>
                        <p className="text-sm text-muted-foreground">by {product.brand}</p>
                    </div>
                    <Badge variant="secondary">{product.category}</Badge>

                    <div className="flex items-center space-x-2">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                        }`}
                                />
                            ))}
                        </div>
                        <span className="text-sm text-muted-foreground">({product.review_count} reviews)</span>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-baseline space-x-2">
                            <span className="text-3xl font-bold">${product.discounted_price?.toFixed(2)}</span>
                            <span className="text-lg text-muted-foreground line-through">${product.actual_price?.toFixed(2)}</span>
                            <Badge variant="destructive">{product.discount}% OFF</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            In stock: {product.stock_quantity} units
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm">Sold by: {product.seller}</p>
                    </div>
                    <div className="flex space-x-2">
                        <Button className="flex-1">
                            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                        </Button>
                        <Button variant="outline">
                            <Heart className="h-4 w-4" />
                        </Button>
                    </div>
                    <div className="mt-10">
                        <h3 className="text-lg font-semibold mb-2">About the product</h3>
                        <p className="text-muted-foreground">{product.$vectorize}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}