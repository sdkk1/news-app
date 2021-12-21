import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './style'

type Props = {
  imageUrl: string;
  title: string;
  author: string;
}

const ListItem = ({imageUrl, title, author}: Props) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: imageUrl}}
        />
      </View>
      <View style={styles.textContainer}>
        <Text numberOfLines={3} style={styles.text}>
          {title}
        </Text>
        <Text style={styles.source}>
          {author}
        </Text>
      </View>
    </View>
  )
}

export default ListItem
