"use client"

import Currency from "@/components/ui/Currency"
import IconButton from "@/components/ui/IconButton"
import useCart from "@/hooks/useCard"
import { Product } from "@/types/types"
import { Trash } from "lucide-react"
import Image from "next/image"
import { ChangeEvent, FC, MouseEventHandler } from "react"

interface CartItemProps {
  data: Product
}

const CartItem: FC<CartItemProps> = ({ data }) => {
  const cart = useCart()

  const onRemove = () => {
    cart.removeItem(data.id)
  }

  const changeValueOfQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    cart.changeQuantity(Number(event.target.value), data)
  }

  return (
    <li className="flex py-6 border-b ">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt="product"
          className="object-center object-contain"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton icon={<Trash size={20} />} onClick={onRemove} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
              {data.size.name}
            </p>
          </div>
          <Currency value={data.price} />
          <div className="text font-semibold mt-4">
            <p>Počet kusů:</p>{" "}
            <input
              onChange={(event) => changeValueOfQuantity(event)}
              type="number"
              className="w-10 h-10 border border-gray-300 rounded-md text-center "
              defaultValue={data.quantity}
              min="1"
              max="10"
            />
          </div>
        </div>
      </div>
    </li>
  )
}

export default CartItem
