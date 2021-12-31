import { SafeAreaView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ListItem from '../../components/news'
import { newsURL } from '../../constants/news'
import styles from './style'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../types/navigation'
import { Article, renderItem } from '../../types/article'

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>
}

const Home = ({navigation}: Props) => {
  const [articles, setArticles] = useState([] as Array<Article>)
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
      onPress={() => navigation.navigate('Article', {article: item})}
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

export default Home
