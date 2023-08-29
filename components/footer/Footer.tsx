import getArticles from "@/actions/GetArticles"
import { Article } from "@/types/types"
import { GithubIcon, LinkedinIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { footerImageData } from "../../libs/images/footerImages"
const Footer = async () => {
  const articles = await getArticles()

  return (
    <footer className=" border-t flex flex-col items-center  bg-white mt-auto">
      <div className="grid grid-cols-3 w-full  max-w-7xl px-10 mt-6">
        <div className="flex flex-col  items-start">
          <div className="flex flex-col">
            <h4 className="font-bold text-2xl  ">Články</h4>
            {articles.map((article: Article) => (
              <Link
                href={`/article/${article.id}`}
                key={article.id}
                className=" text-neutral-500 hover:text-black duration-300 ease-in-out"
              >
                {article.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col  items-center">
          <div className="flex flex-col">
            <h4 className="font-bold text-2xl ">Odkazy</h4>
            <Link
              href="www.github.com"
              className=" text-neutral-500 hover:text-black duration-300 ease-in-out flex gap-2 items-center"
            >
              Github
              <GithubIcon className="w-4 h-4" />
            </Link>
            <Link
              href="www.linkedin.com"
              className=" text-neutral-500 hover:text-black duration-300 ease-in-out flex gap-2"
            >
              LinkedIn
              <LinkedinIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col  items-end">
          <div className="flex flex-col">
            {footerImageData.map((image) => (
              <div className="  ">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={100}
                  height={100}
                  className="object-center object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto py-10 ">
        <p className="text-center text-xs text-black">
          &copy; 2023 LoveNaramky, Václav Vlček
        </p>
      </div>
    </footer>
  )
}

export default Footer
