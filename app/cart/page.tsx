"use client"

import Container from "@/components/ui/Container"
import useCart from "@/hooks/useCard"
import AdressForm from "./components/AdressForm"
import CartItem from "./components/CartItem"
import { useEffect, useState } from "react"
const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false)
  const cart = useCart()
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <div className="bg-white">
        <Container>
          <div className="px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-black"> Nákupní košík</h1>
            <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
              <div className="lg:col-span-7">
                {cart.items.length === 0 ? (
                  <p className="text-neutral-500">Košík je prázdný</p>
                ) : null}

                <ul>
                  {cart.items.map((item) => (
                    <CartItem key={item.id} data={item} />
                  ))}
                </ul>
              </div>
              <div className="mt-16 rounded-lg px-4 py-6 bg-gray-50 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
                <AdressForm />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default CartPage
