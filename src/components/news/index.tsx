import React from 'react'
import { TouchableOpacity, View, Image, Text } from 'react-native'
import styles from './style'

type Props = {
  imageUrl: string
  title: string
  author: string
  onPress: () => void
}

const ListItem = ({imageUrl, title, author, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
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
    </TouchableOpacity>
  )
}

export default ListItem
