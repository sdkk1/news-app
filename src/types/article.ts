export type Article = {
  urlToImage: string
  title: string
  author: string
  url: string
}

export type RenderItem = {
  item: Article
}

export type Clips = {
  clips: Article[]
}

export type Clip = {
  clip: Article
}
