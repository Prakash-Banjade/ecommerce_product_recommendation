import { Card, CardContent } from "../ui/card"
import { Star } from "lucide-react"
import { ProductCardWrapper } from "./product-card-wrapper"
import Link from "next/link"
import { shortenTitle } from "../../../../../packages/utils/shorten-title"
import { TVectorProduct } from "packages/shared/schemas/product.schema"
import { Badge } from "../ui/badge"
import Image from "next/image"

export const ProductCard = ({ product }: { product: TVectorProduct }) => {
    return (
        <ProductCardWrapper>
            <Link href={`/products/${product._id}`} className="group">
                <Card className="w-full max-w-sm overflow-hidden h-full">
                    <div className="relative">
                        <Image
                            src={product.featured_image ?? "/placeholder.avif"}
                            alt={product.title}
                            height={400}
                            width={400}
                            className="w-full h-48 object-cover"
                            loading="lazy"
                        />
                        <Badge className="absolute top-2 right-2" variant={'secondary'}>
                            {product.discount} OFF
                        </Badge>
                    </div>
                    <CardContent className="p-4">
                        <h2 className="text-lg font-semibold mb-2 hover:underline hover:text-primary">{shortenTitle(product.title)}</h2>
                        <div className="flex items-baseline mb-2">
                            <span className="text-2xl font-bold text-primary">${product.discounted_price}</span>
                            <span className="ml-2 text-sm text-muted-foreground line-through">${product.actual_price}</span>
                        </div>
                        <div className="flex items-center">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>
                            <span className="ml-2 text-sm text-muted-foreground">
                                {product.rating.toFixed(1)} ({product.review_count} reviews)
                            </span>
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </ProductCardWrapper>
    )
}