"use client"

import { Product } from "@/types/types"
import Image from "next/image"
import { FC, MouseEventHandler, use } from "react"
import IconButton from "./IconButton"
import { Expand, ShoppingCart } from "lucide-react"
import Currency from "./Currency"
import { useRouter } from "next/navigation"
import usePreviewModal from "@/hooks/usePrievewModal"
import useCart from "@/hooks/useCard"

interface ProductCardProps {
  data: Product
}
const ProductCard: FC<ProductCardProps> = ({ data }) => {
  const router = useRouter()
  const previewModal = usePreviewModal()
  const handleClick = () => {
    router.push(`/product/${data?.id}`)
  }
  const cart = useCart()
  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    previewModal.onOpen(data)
  }
  const onAddtoCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    cart.addItem(data)
  }

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      <div className="aspect-square rounded-xl relative bg-contain">
        <Image
          className="ascpect-square object-contain rounded-md"
          alt="product"
          fill={true}
          src={data?.images?.[0]?.url}
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              icon={<Expand size={20} className="text-gray-500 z-20" />}
              onClick={onPreview}
            />{" "}
            <IconButton
              icon={<ShoppingCart size={20} className="text-gray-500" />}
              onClick={onAddtoCart}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-gray-500 text-sm">{data.category?.name}</p>
      </div>
      {/* price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  )
}

export default ProductCard
