import { Article } from "./article"

export type RootStackParamList = {
  Home: undefined
  Article: { article: Article }
}
