import { Search, ShoppingBag } from 'lucide-react'
import React from 'react'
import { SearchBox } from './search-box'
import Link from 'next/link'
import { ThemeToggleBtn } from './theme-toggle-btn'

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background border-b text-primary py-2 shadow-sm"> 
            <div className="container flex h-16 items-center justify-between px-4">
                <Link className="flex items-center space-x-2" href="/">
                    <ShoppingBag className="h-6 w-6" />
                    <span className="font-bold text-xl sm:inline hidden">MinimalStore</span>
                </Link>
                <div className="flex items-center space-x-4 flex-1 justify-end">
                    <div className="relative flex-1 max-w-sm flex items-center">
                        <Search className="absolute left-2 h-4 w-4" />
                        <SearchBox />
                    </div>
                    <ThemeToggleBtn />
                </div>
            </div>
        </header>
    )
}