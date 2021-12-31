import { StyleSheet, SafeAreaView, FlatList, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ListItem from './src/components/news'
import { newsURL } from './src/constants/news'
import { isAndroid } from './src/util/app'

type article = {
  urlToImage: string
  title: string
  author: string
}

type renderItem = {
  item: article
}

export default function App() {
  const [articles, setArticles] = useState([] as Array<article>)
  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      const res = await axios.get(newsURL)
      if (res.data.articles) {
        setArticles(res.data.articles)
      }
    } catch (error) {
      console.log(error)
    }
  }

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
