export type BlogArticleList = {
  contents: BlogArticle[],
  totalCount: number,
  offset: number,
  limit: number
}

export type BlogArticle = {
  id: string,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  revisedAt: string,
  title: string,
  content: string,
  eyecatch: EyeCatch,
  category: Category
}

export type EyeCatch = {
  url: string,
  height: number,
  width: number
}

export type Category = {
  id: string,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  revisedAt: string,
  name: string
}
