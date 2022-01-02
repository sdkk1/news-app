import { SafeAreaView, FlatList, RefreshControl } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
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
  const [refreshing, setRefreshing] = useState(false)
  const page = useRef(1)
  const isAllFethed = useRef(false)

  useEffect(() => {
    setLoading(true)
    fetchArticles(page.current)
    setLoading(false)
  }, [])

  const fetchArticles = async (page: number) => {
    try {
      const res = await axios.get(`${newsURL}&page=${page}`)
      if (res.data.articles.length > 0) {
        setArticles(prevArticles => [...prevArticles, ...res.data.articles])
      } else {
        isAllFethed.current = true
      }
    } catch (error) {
      console.log(error)
    }
  }
  const renderItem = ({ item }: RenderItem) => (
    <ListItem
      imageUrl={item.urlToImage}
      title={item.title}
      author={item.author}
      onPress={() => navigation.navigate('Article', {article: item})}
    />
  )
  const onEndReached = async () => {
    if (!isAllFethed.current) {
      page.current += 1
      await fetchArticles(page.current)
    }
  }
  const onRefresh = async () => {
    setRefreshing(true)
    resetState()
    await fetchArticles(page.current)
    setRefreshing(false)
  }
  const resetState = () => {
    setArticles([])
    page.current = 1
    isAllFethed.current = false
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(_item, index) => index.toString()}
        onEndReached={onEndReached}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
      {loading && <Loading />}
    </SafeAreaView>
  )
}

export default Home
