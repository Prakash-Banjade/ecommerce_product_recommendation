import Header from "../components/header";
import HomeMainSection from "../components/homepage/main-section";
import { trpc } from "./trpc"

export default async function HomePage() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HomeMainSection />
      <Footer />
    </div>
  )
}

function Footer() {
  return <footer className="w-full py-4 text-center text-sm border-t">
    © 2023 MinimalStore. All rights reserved.
  </footer>
}