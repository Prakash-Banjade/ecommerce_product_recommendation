import Image from "next/image"
import { Card, CardContent, CardFooter } from "../ui/card"
import { Star } from "lucide-react"
import { ProductCardWrapper } from "./product-card-wrapper"
import Link from "next/link"
import { IVectorProduct } from "../../../../../packages/interfaces/vector-product.interfact"
import { shortenTitle } from "../../../../../packages/utils/shorten-title"

export const ProductCard = ({ product }: { product: IVectorProduct }) => {
    return (
        <ProductCardWrapper>
            <Link href={`/product/${product._id}`} className="group">
                <Card className="overflow-hidden group">
                    <CardContent className="p-0">
                        <Image
                            alt={product.title}
                            className="object-cover w-full h-60 transition-transform duration-300 group-hover:scale-105"
                            height="240"
                            src={product.featured_image ?? '/product-fallback.avif'}
                            width="360"
                            priority
                        />
                    </CardContent>
                    <CardFooter className="p-4">
                        <div className="w-full">
                            <h3 className="font-semibold text-lg mb-1 hover:underline hover:text-primary transition-all">{shortenTitle(product.title, 40)}</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-sm">
                                    <Star className="inline-block w-4 h-4 mr-1 text-yellow-400" />
                                    4.5 (128)
                                </span>
                                <span className="font-bold">${product.price}</span>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            </Link>
        </ProductCardWrapper>
    )
}