import { SafeAreaView } from 'react-native'
import { WebView } from 'react-native-webview'
import { useDispatch, useSelector } from 'react-redux'
import { addClip, deleteClip } from '../../store/actions/article'
import ClipButton from '../../components/clipButton'
import Loading from '../../components/loading'
import styles from './style'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../../types/navigation'
import { State } from '../../types/store'

type Props = {
  route: RouteProp<RootStackParamList, 'Article'>
}

const Article = ({route}: Props) => {
  const { article } = route.params
  const dispatch = useDispatch()

  const { clips } = useSelector((state: State) => state.article)
  const isClipped = () => {
    return clips.some(e => e.url === article.url)
  }
  const toggleClip = () => {
    isClipped() ? dispatch(deleteClip({clip: article})) : dispatch(addClip({clip: article}))
  }

  return (
    <SafeAreaView style={styles.container}>
      <ClipButton isClipped={isClipped()} onPress={toggleClip} />
      <WebView
        source={{ uri: article.url }}
        startInLoadingState={true}
        renderLoading={() => <Loading />}
      />
    </SafeAreaView>
  )
}

export default Article
