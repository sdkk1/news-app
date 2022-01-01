import { RouteProp } from '@react-navigation/native'
import { Article } from "./article"

export type RootStackParamList = {
  Home: undefined
  Article: { article: Article }
  Clip: undefined
}

export type BottomTabParamList = {
  HomeTab: undefined
  ClipTab: undefined
}

export type BottomTabRouteProp = {
  route: RouteProp<BottomTabParamList, keyof BottomTabParamList>
}
