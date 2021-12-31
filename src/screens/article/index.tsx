import { SafeAreaView, Text } from 'react-native'
import { WebView } from 'react-native-webview'
import styles from './style'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../../types/navigation'

type Props = {
  route: RouteProp<RootStackParamList, 'Article'>
}

const Article = ({route}: Props) => {
  const { article } = route.params

  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: article.url }} />
    </SafeAreaView>
  )
}

export default Article
