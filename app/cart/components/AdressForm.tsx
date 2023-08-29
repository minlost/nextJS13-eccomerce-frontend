"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Summary from "./Summary"
import Button from "@/components/ui/Buttons"
import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import useCart from "@/hooks/useCard"
import toast from "react-hot-toast"
import axios from "axios"

const formSchema = z.object({
  fName: z.string().min(1),
  lName: z.string().min(1),
  email: z.string().min(1),
  phone: z.string().min(1),
  street: z.string().min(1),
  city: z.string().min(1),
  zip: z.string().min(1),
  country: z.string().min(1),
  term: z.literal(true, {
    errorMap: () => ({ message: "You must accept Terms and Conditions" }),
  }),
})

declare global {
  interface Window {
    Packeta: any
  }
}

type FormValues = z.infer<typeof formSchema>

const AdressForm = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const items = useCart((state) => state.items)
  const removeAll = useCart((state) => state.removeAll)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment was successful")
      removeAll()
      router.push("/success")
    }

    if (searchParams.get("canceled")) {
      toast.error("Payment was canceled")
    }
  }, [searchParams])

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fName: "",
      lName: "",
      email: "",
      phone: "",
      street: "",
      city: "",
      zip: "",
      country: "",
    },
  })

  const onSubmit = async (data: FormValues) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => {
          return { id: item.id, quantity: item.quantity }
        }),
        data: data,
      }
    )

    window.location = response.data.url
  }

  return (
    <>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4 lg:flex lg:justify-between">
          <div className="mb-4 md:mr-2 md:mb-0">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="firstName"
            >
              Křestní jméno
            </label>
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="First Name"
              {...form.register("fName")}
            />
            {form.formState.errors.fName && (
              <p className="text-red-500">
                {form.formState.errors.fName.message}
              </p>
            )}
          </div>
          <div className="md:mt-2">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="lastName"
            >
              Příjmení
            </label>
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Last Name"
              {...form.register("lName")}
            />
            {form.formState.errors.lName && (
              <p className="text-red-500">
                {form.formState.errors.lName.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-4 lg:flex lg:justify-between">
          <div className="mb-4 md:mr-2 md:mb-0">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              {...form.register("email")}
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Telefon
            </label>
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="+420 123 456 789"
              {...form.register("phone")}
            />
          </div>
        </div>
        <div className="mb-4 ">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="city"
          >
            Město
          </label>

          <input
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="city"
            type="text"
            placeholder="Město"
            {...form.register("city")}
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="street"
          >
            Ulice a č.p.
          </label>
          <input
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="street"
            type="text"
            placeholder="Ulice"
            {...form.register("street")}
          />
        </div>
        <div className="mb-4 md:flex md:justify-between">
          <div className="mb-4 md:mr-2 md:mb-0">
            {" "}
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="zip"
            >
              PSČ
            </label>
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
              id="zip"
              type="text"
              placeholder="PSČ"
              {...form.register("zip")}
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="country"
            >
              Země
            </label>
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
              id="country"
              type="text"
              placeholder="Země"
              {...form.register("country")}
            />
          </div>
        </div>
        <div className="mb-4 md:flex md:justify-between"></div>
        <div className="mb-4">
          <input type="checkbox" id="terms" {...form.register("term")} />
          <label
            htmlFor="terms"
            className="ml-2 mb-2 text-sm font-bold text-gray-700"
          >
            Souhlasím s obchobními podmínkami
          </label>
          {form.formState.errors.term && (
            <p className="text-red-500">{form.formState.errors.term.message}</p>
          )}
        </div>
        <div className="mb-6 text-center"></div>
        <hr className="mb-6 border-t" />
        <Summary />

        <Button
          type="submit"
          className="text-white w-full mt-6"
          disabled={isLoading || items.length <= 0}
        >
          Pokračovat k platbě
        </Button>
      </form>
    </>
  )
}
export default AdressForm
