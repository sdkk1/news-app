import { SafeAreaView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ListItem from '../../components/news'
import Loading from '../../components/loading'
import { newsURL } from '../../constants/news'
import styles from './style'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../types/navigation'
import { Article, RenderItem } from '../../types/article'

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>
}

const Home = ({navigation}: Props) => {
  const [articles, setArticles] = useState([] as Article[])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    setLoading(true)

    try {
      const res = await axios.get(newsURL)
      if (res.data.articles) {
        setArticles(res.data.articles)
      }
    } catch (error) {
      console.log(error)
    }

    setLoading(false)
  }

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
        data={articles}
        renderItem={renderItem}
        keyExtractor={(_item, index) => index.toString()}
      />
      {loading && <Loading />}
    </SafeAreaView>
  )
}

export default Home
