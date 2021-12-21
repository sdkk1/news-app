import { StyleSheet, View } from 'react-native'
import ListItem from './components/news'
import articles from './dummies/articles.json'

type article = {
  urlToImage: string;
  title: string;
  author: string;
}

export default function App() {
  const items = articles.map((article: article, index: number) => {
    return (
      <ListItem
        imageUrl={article.urlToImage}
        title={article.title}
        author={article.author}
        key={index}
      />
    )
  })

  return (
    <View style={styles.container}>
      {items}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
