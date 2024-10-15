import { Card, CardContent } from "../ui/card"
import { Star } from "lucide-react"
import { ProductCardWrapper } from "./product-card-wrapper"
import Link from "next/link"
import { shortenTitle } from "../../../../../packages/utils/shorten-title"
import { TVectorProduct } from "packages/shared/schemas/product.schema"
import { Badge } from "../ui/badge"
import Image from "next/image"

export const ProductCardMini = ({ product }: { product: TVectorProduct }) => {
    return (
        <ProductCardWrapper>
            <Link href={`/products/${product._id}`} className="group">
                <Card className="w-full max-w-[200px] overflow-hidden">
                    <div className="relative">
                        <Image
                            src={product.featured_image ?? "/placeholder.svg"}
                            alt={product.title}
                            height={150}
                            width={200}
                            className="w-full h-32 object-cover"
                        />
                        <Badge className="absolute top-1 right-1 text-xs" variant="secondary">
                            {product.discount}% OFF
                        </Badge>
                    </div>
                    <CardContent className="p-2">
                        <h2 className="text-sm font-semibold mb-1 truncate hover:text-primary">
                            {shortenTitle(product.title)}
                        </h2>
                        <div className="flex items-baseline mb-1">
                            <span className="text-base font-bold text-primary">${product.discounted_price}</span>
                            <span className="ml-1 text-xs text-muted-foreground line-through">${product.actual_price}</span>
                        </div>
                        <div className="flex items-center">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>
                            <span className="ml-1 text-xs text-muted-foreground">
                                {product.rating.toFixed(1)} ({product.review_count})
                            </span>
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </ProductCardWrapper>
    )
}