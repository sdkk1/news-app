import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    height: 100,
    borderColor: 'gray',
    borderWidth: 1
  },
  imageContainer: {
    width: 100
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10
  },
  text: {
    fontSize: 16
  },
  source: {
    fontSize: 12,
    color: 'gray'
  }
})

export default styles
