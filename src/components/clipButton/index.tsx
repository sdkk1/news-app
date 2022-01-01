import { TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import styles from './style'

type Props = {
  isClipped: boolean
  onPress: () => void
}

const ClipButton = ({isClipped, onPress}: Props) => {
  const iconName = isClipped ? 'bookmark' : 'bookmark-o'

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FontAwesome name={iconName} size={40} color="black" />
    </TouchableOpacity>
  )
}

export default ClipButton
