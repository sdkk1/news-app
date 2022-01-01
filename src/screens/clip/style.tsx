import { StyleSheet, StatusBar } from 'react-native'
import { isAndroid } from '../../util/app'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isAndroid() ? StatusBar.currentHeight : 0,
    backgroundColor: '#fff'
  }
})

export default styles
