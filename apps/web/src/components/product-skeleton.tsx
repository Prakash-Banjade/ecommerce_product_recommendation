import { Card, CardContent } from "./ui/card";

export default function ProductSkeleton() {
    return (
        <Card className="w-full max-w-sm overflow-hidden">
            <div className="relative">
                <div className="w-full h-48 bg-muted animate-pulse" />
                <div className="absolute top-2 right-2 w-16 h-6 bg-muted animate-pulse rounded-full" />
            </div>
            <CardContent className="p-4">
                <div className="h-6 bg-muted animate-pulse rounded mb-2" />
                <div className="flex items-baseline mb-2">
                    <div className="h-8 w-24 bg-muted animate-pulse rounded mr-2" />
                    <div className="h-4 w-16 bg-muted animate-pulse rounded" />
                </div>
                <div className="flex items-center">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-4 h-4 bg-muted animate-pulse rounded-full mr-1" />
                        ))}
                    </div>
                    <div className="ml-2 h-4 w-24 bg-muted animate-pulse rounded" />
                </div>
            </CardContent>
        </Card>
    )
}

export const ProductsLoadingSkeleton = () => {
    return <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 container py-12 md:py-24 lg:py-32">
        {[...Array(10)].map((_, i) => (
            <ProductSkeleton key={i} />
        ))}
    </div>
}