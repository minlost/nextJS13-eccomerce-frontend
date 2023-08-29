"use client"

import { priceFormatter } from "@/libs/formaters/priceFormatter"
import { FC, use, useEffect, useState } from "react"

interface CurrencyProps {
  value?: string | number
}

const Currency: FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="font-semibold">{priceFormatter.format(Number(value))}</div>
  )
}

export default Currency
