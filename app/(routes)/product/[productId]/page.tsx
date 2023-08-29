import getProduct from "@/actions/GetProduct"
import getProducts from "@/actions/GetProducts"
import Gallery from "@/components/gallery/Gallery"
import Info from "@/components/info/Info"
import ProductList from "@/components/productList/ProductList"
import Container from "@/components/ui/Container"
import { FC } from "react"

interface ProductPageProps {
  params: {
    productId: string
  }
}

const ProductPage: FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId)
  console.log(product)

  const suggestedProducts = await getProducts({
    categoryId: product?.category.id,
  })

  return (
    <Container>
      <div className="bg-white bg-opacity-90">
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid  sm:grid sm:grid-cols-2  sm:gap-x-4 lg:items-start lg:gap-x-8  ">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="mt-10" />
          <ProductList title="Podobné produkty" items={suggestedProducts} />
        </div>
      </div>
    </Container>
  )
}

export default ProductPage
