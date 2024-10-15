import { Skeleton } from "apps/web/src/components/ui/skeleton"
import { Star } from "lucide-react"

export default function SingleProductLoading() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <Skeleton className="aspect-square w-full rounded-lg" />
                </div>
                <div className="space-y-6">
                    <div>
                        <Skeleton className="h-9 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                    <Skeleton className="h-6 w-24" />
                    <div className="flex items-center space-x-2">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-gray-300" />
                            ))}
                        </div>
                        <Skeleton className="h-4 w-24" />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-baseline space-x-2">
                            <Skeleton className="h-8 w-24" />
                            <Skeleton className="h-6 w-20" />
                            <Skeleton className="h-6 w-16" />
                        </div>
                        <Skeleton className="h-4 w-32" />
                    </div>
                    <Skeleton className="h-4 w-40" />
                    <div className="flex space-x-2">
                        <Skeleton className="h-10 flex-1" />
                        <Skeleton className="h-10 w-10" />
                    </div>
                    <div className="mt-10">
                        <Skeleton className="h-6 w-48 mb-2" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full mt-2" />
                        <Skeleton className="h-4 w-3/4 mt-2" />
                    </div>
                </div>
            </div>
        </div>
    )
}