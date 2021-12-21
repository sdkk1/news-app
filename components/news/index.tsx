import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './style'

const ListItem = () => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: 'https://picsum.photos/id/10/200/200'}}
        />
      </View>
      <View style={styles.textContainer}>
        <Text numberOfLines={3} style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </Text>
        <Text style={styles.source}>ReactNews</Text>
      </View>
    </View>
  )
}

export default ListItem
