import getCategories from "@/actions/GetCategoris"
import Image from "next/image"
import Link from "next/link"
import Container from "../ui/Container"
import HamburgerBtn from "../ui/HamburgerBtn"
import MainNav from "./MainNav"
import MobileNav from "./MobileNav"
import NavbarActions from "./NavbarActions"

export const revalide = 0

const Navbar = async () => {
  const categories = await getCategories()

  return (
    <>
      <div className="border-b bg-white ">
        <Container>
          <div className="  lg:px-8 flex h-16 items-center justify-between  pr-3 ">
            <Link href="/" className="ml-4 flex lg-ml-0 gap-x-2">
              <p className="font-bold text-xl flex items-center">
                KRÁSNÉ NÁRAMKY
                <Image
                  src="/img/bg-heart.png"
                  alt="heart"
                  width={50}
                  height={50}
                  quality={100}
                  className="hidden md:block"
                />
              </p>
            </Link>
            <MainNav data={categories} />
            <NavbarActions />
            <HamburgerBtn />
          </div>
        </Container>
      </div>

      <MobileNav data={categories} />
    </>
  )
}

export default Navbar
