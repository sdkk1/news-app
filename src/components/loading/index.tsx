import { View, ActivityIndicator } from 'react-native';
import styles from './style'

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  )
}

export default Loading
