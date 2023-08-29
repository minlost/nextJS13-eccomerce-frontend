"use client"

import { FC } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/libs/utils/utils"
import { Category } from "@/types/types"
import { useNavbarStore } from "@/hooks/useNavabrStore"

interface MobileNavProps {
  data: Category[]
}

const MobileNav: FC<MobileNavProps> = ({ data }) => {
  const pathname = usePathname()
  const { isNavbarOpen, toggleNavbar } = useNavbarStore()

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }))

  return (
    <div
      className={`h-screen w-screen bg-red-300 fixed z-30 top-0 right-0 duration-300 ease-in-out transform transition-all ${
        isNavbarOpen ? "translate-x-0 visible" : "translate-x-full invisible"
      }`}
    >
      <div className="w-full h-full flex justify-center items-center flex-col gap-5">
        {routes.map((route) => (
          <Link
            href={route.href}
            className={cn(
              " text-4xl font-medium hover:text-black ease-in-out duration-300",
              route.active ? "text-slate-300" : "text-white "
            )}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MobileNav
