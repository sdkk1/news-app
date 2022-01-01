import { SafeAreaView, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import ListItem from '../../components/news'
import styles from './style'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../types/navigation'
import { State } from '../../types/store'
import { RenderItem } from '../../types/article'

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Clip'>
}

const Clip = ({navigation}: Props) => {
  const { clips } = useSelector((state: State) => state.article)
  const renderItem = ({ item }: RenderItem) => (
    <ListItem
      imageUrl={item.urlToImage}
      title={item.title}
      author={item.author}
      onPress={() => navigation.navigate('Article', {article: item})}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={clips}
        renderItem={renderItem}
        keyExtractor={(_item, index) => index.toString()}
      />
    </SafeAreaView>
  )
}

export default Clip
