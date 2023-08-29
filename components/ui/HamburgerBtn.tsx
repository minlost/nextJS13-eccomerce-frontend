"use client"

import { useNavbarStore } from "@/hooks/useNavabrStore"
import { cn } from "@/libs/utils/utils"
import { FC } from "react"

interface HamburgerBtnProps {
  children?: React.ReactNode
}

const HamburgerBtn: FC<HamburgerBtnProps> = ({ children, ...props }) => {
  const { isNavbarOpen, toggleNavbar } = useNavbarStore()

  return (
    <div
      className="relative w-7 h-8 cursor-pointer mx-4 z-40 md:hidden"
      onClick={toggleNavbar}
    >
      <div
        className={cn(
          "absolute left-0 w-full h-1 bg-black transition-all duration-300 ease-in-out transform",
          isNavbarOpen ? "rotate-45 top-3.5" : "top-1"
        )}
      ></div>
      <div
        className={cn(
          "absolute left-0 w-full h-1 bg-black transition-all duration-300 ease-in-out",
          isNavbarOpen ? "opacity-0" : "top-3.5"
        )}
      ></div>
      <div
        className={cn(
          "absolute left-0 w-full h-1 bg-black transition-all duration-300 ease-in-out transform",
          isNavbarOpen ? "-rotate-45 top-3.5" : "top-6"
        )}
      ></div>
    </div>
  )
}

export default HamburgerBtn
