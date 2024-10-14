"use client"

import { Input } from "./ui/input"

export function SearchBox() {
    return (
        <Input placeholder="Search products" className="pl-8 py-5 w-full" type="search" />
    )
}