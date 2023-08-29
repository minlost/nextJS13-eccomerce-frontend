import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { Product } from "@/types/types"
import toast from "react-hot-toast"

interface CartStore {
  items: Product[]
  addItem: (data: Product) => void
  removeItem: (id: string) => void
  changeQuantity: (value: Number, data: Product) => void
  removeAll: () => void
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items
        const existingItem = currentItems.find((item) => item.id === data.id)
        console.log("existingItem", existingItem)
        if (existingItem) {
          existingItem.quantity = existingItem.quantity + 1
          return toast(
            `Another ittem added to card you have ${existingItem.quantity} in card`
          )
        }
        set({ items: [...currentItems, data] })
        toast.success("Item added to cart")
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] })
        toast.success("Item removed from cart")
      },
      removeAll: () => {
        set({ items: [] })
        toast.success("All items removed from cart")
      },
      changeQuantity: (value: Number, data: Product) => {
        const currentItems = [...get().items] // creating a new copy of the items array
        const existingItem = currentItems.find((item) => item.id === data.id)
        if (existingItem) {
          existingItem.quantity = value
        }
        set({ items: currentItems }) // setting the items state with the new copy of the array
        toast.success(`Quantity of item changed to ${value}`)
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export default useCart
