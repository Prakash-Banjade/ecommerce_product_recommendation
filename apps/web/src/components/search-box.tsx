"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Input } from "./ui/input"
import { debounce } from "lodash"

export function SearchBox() {
    const searchParam = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const handleSearchChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.value
            ? router.push('/?search=' + e.target.value)
            : router.push(pathname)
    }, 500);

    return (
        <Input placeholder="Search products" className="pl-8 py-5 w-full" type="search" defaultValue={decodeURI(searchParam.get('search') ?? '')} onChange={handleSearchChange} />
    )
}