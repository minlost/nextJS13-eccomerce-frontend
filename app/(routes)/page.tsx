import getBillboards from "@/actions/GetBillboards"
import getCarousels from "@/actions/GetCarousels"
import getProducts from "@/actions/GetProducts"
import Billboard from "@/components/billboard/Billboard"
import Carousels from "@/components/carousels/Carousels"
import ProductList from "@/components/productList/ProductList"
import Container from "@/components/ui/Container"

export const revalide = 0

const HomePage = async () => {
  const billboard = await getBillboards("582bb016-d31c-4e09-a9d6-990a704d5506")
  const carousels = await getCarousels()

  const products = await getProducts({ isFeatured: "true" })
  console.log(products)
  return (
    <Container>
      <div className=" pb-10  ">
        {billboard && <Billboard data={billboard} />}
        <Carousels data={carousels} />
        <div className="flex flex-col gap-y-8  lg:px-8 px-4 pt-10">
          <ProductList title="Novinky" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
