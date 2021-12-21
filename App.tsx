import { StyleSheet, SafeAreaView, FlatList, StatusBar } from 'react-native'
import ListItem from './components/news'
import articles from './dummies/articles.json'
import { isAndroid } from './util/app'

type article = {
  urlToImage: string
  title: string
  author: string
}

type renderItem = {
  item: article
}

export default function App() {
  const renderItem = ({ item }: renderItem) => (
    <ListItem
      imageUrl={item.urlToImage}
      title={item.title}
      author={item.author}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(_item, index) => index.toString()}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isAndroid() ? StatusBar.currentHeight : 0,
    backgroundColor: '#fff'
  }
})
