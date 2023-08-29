import getArticle from "@/actions/GetArticle"
import React from "react"
import ArticleOutput from "./components/ArticleOutput"

interface ArticlePageProps {
  params: {
    articleId: string
  }
}

const ArticlePage = async ({ params }: ArticlePageProps) => {
  const article = await getArticle(params.articleId)

  return (
    <div className="   mx-auto flex  max-w-7xl  justify-center flex-col py-6 ">
      <h2 className="text-center font-semibold text-4xl">{article.title}</h2>
      <ArticleOutput content={article.content} />
    </div>
  )
}

export default ArticlePage
