"use client"

import { Product } from "@/types/types"
import { FC } from "react"
import Currency from "../ui/Currency"
import Button from "../ui/Buttons"
import { ShoppingCart } from "lucide-react"
import useCart from "@/hooks/useCard"

interface InfoProps {
  data: Product
}

const Info: FC<InfoProps> = ({ data }) => {
  const cart = useCart()

  const onAddToCart = () => {
    cart.addItem(data)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 otems-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gay-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color: </h3>

          <div>{data?.color?.name}</div>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          ></div>
        </div>
        <div className="mt-10 flex items-center gap-x-3">
          <Button
            onClick={onAddToCart}
            className="flex items-center gap-x-3 text-white"
          >
            Přidat do košíku
            <ShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Info
