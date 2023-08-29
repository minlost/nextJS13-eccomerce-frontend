"use client"

import { FC } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/libs/utils/utils"
import { Category } from "@/types/types"

interface MainNavProps {
  data: Category[]
}

const MainNav: FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname()

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }))

  return (
    <nav className="mx-6 md:flex items-center space-x-4 lg:space-x-6 hidden">
      {routes.map((route) => (
        <Link
          href={route.href}
          className={cn(
            "text-sm font-medium hover:text-black",
            route.active ? "text-balck" : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

export default MainNav
