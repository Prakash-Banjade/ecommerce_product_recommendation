import { Suspense } from "react";
import HomeMainSection from "../components/homepage/main-section";
import { ProductsLoadingSkeleton } from "../components/product-skeleton";

export default async function HomePage() {

  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<ProductsLoadingSkeleton />}>
        <HomeMainSection />
      </Suspense>
    </div>
  )
}