import { Suspense } from "react";
import HomeMainSection from "../components/homepage/main-section";
import { ProductsLoadingSkeleton } from "../components/product-skeleton";

export type THomePageProps = {
  searchParams: {
      search: string;
  }
}

export default async function HomePage(props: THomePageProps) {

  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<ProductsLoadingSkeleton />}>
        <HomeMainSection {...props} />
      </Suspense>
    </div>
  )
}