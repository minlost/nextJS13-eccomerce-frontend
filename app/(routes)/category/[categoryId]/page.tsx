import getCategory from "@/actions/GetCategory"
import getColors from "@/actions/GetColors"
import getProducts from "@/actions/GetProducts"
import getSizes from "@/actions/GetSizes"
import Billboard from "@/components/billboard/Billboard"
import Container from "@/components/ui/Container"
import React, { FC } from "react"
import Filter from "./components/Filter"
import NoResults from "@/components/ui/NoResults"
import ProductCard from "@/components/ui/ProductCard"
import MobileFilter from "./components/MobileFilter"

export const revalidate = 0

interface CategoryPageProps {
  params: {
    categoryId: string
  }
  searchParams: {
    colorId: string
    categoryId: string
    sizeId: string
  }
}

const CategoryPage: FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  })

  console.log(params.categoryId)

  const sizes = await getSizes()
  const colors = await getColors()
  const category = await getCategory(params.categoryId)

  return (
    <div className=" ">
      <Container>
        <Billboard data={category.billboard} />

        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8 ">
            <div className="mt-6">
              <MobileFilter sizes={sizes} colors={colors} />
              <div className="hidden lg:block  bg-white py-5 px-2 mb-auto  rounded-md">
                <Filter valueKey="sizeId" name="Veliksot" data={sizes} />
                <Filter valueKey="colorId" name="Barva" data={colors} />
              </div>
            </div>
            <div className="mt-6 lg:col-span-4 ;g:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CategoryPage
