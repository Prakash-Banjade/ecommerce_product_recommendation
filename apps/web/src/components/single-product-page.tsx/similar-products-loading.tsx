import { Star } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import { Skeleton } from "../ui/skeleton"
import { Badge } from "../ui/badge"
import React from "react"

export default function SimilarProductsLoading() {
    return (
        <section className="container px-4 my-8">
            <Skeleton className="h-7 w-64 mb-8" />

            <div className="mt-8 flex flex-wrap gap-4">
                {[...Array(8)].map((_, index) => (
                    <React.Fragment key={index}>{renderProductSkeleton()}</React.Fragment>
                ))}
            </div>
        </section>
    )
}

const renderProductSkeleton = () => (
    <Card className="w-full max-w-[200px] overflow-hidden">
        <div className="relative">
            <Skeleton className="w-full h-32" />
            <Badge className="absolute top-1 right-1 text-xs" variant="secondary">
                <Skeleton className="w-8 h-4" />
            </Badge>
        </div>
        <CardContent className="p-2">
            <Skeleton className="h-4 w-3/4 mb-1" />
            <div className="flex items-baseline mb-1">
                <Skeleton className="h-5 w-16 mr-1" />
                <Skeleton className="h-3 w-10" />
            </div>
            <div className="flex items-center">
                <div className="flex">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-gray-300" />
                    ))}
                </div>
                <Skeleton className="h-3 w-16 ml-1" />
            </div>
        </CardContent>
    </Card>
)