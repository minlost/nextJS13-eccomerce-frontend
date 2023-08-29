"use client"

import Button from "@/components/ui/Buttons"
import Currency from "@/components/ui/Currency"
import useCart from "@/hooks/useCard"
import axios from "axios"
import { useSearchParams } from "next/navigation"
import Script from "next/script"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

declare global {
  interface Window {
    Packeta: any
  }
}

const Summary = () => {
  const items = useCart((state) => state.items)

  const calculateTotal = items.reduce((acc, item) => {
    return acc + Number(item.price) * item.quantity
  }, 0)

  return (
    <>
      <div className="mt-6 space-y-4">
        <div className=" flex items-center justify-between   pt-4">
          <div className="text-base font-medium text-gray-900">
            Celková cena
          </div>
          <Currency value={calculateTotal} />
        </div>
      </div>
    </>
  )
}

export default Summary
