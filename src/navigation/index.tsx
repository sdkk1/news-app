import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons'
import Home from '../screens/home'
import Article from '../screens/article'
import Clip from '../screens/clip'
import { RootStackParamList, BottomTabParamList, BottomTabRouteProp } from '../types/navigation'
import { iconName } from '../types/icon'

const Stack = createStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator<BottomTabParamList>()

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Article' component={Article} />
    </Stack.Navigator>
  )
}
const ClipStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Clip' component={Clip} />
      <Stack.Screen name='Article' component={Article} />
    </Stack.Navigator>
  )
}

const screenOptions = ({route}: BottomTabRouteProp): BottomTabNavigationOptions => ({
  tabBarLabel: () => {
    let tabName

    switch (route.name) {
      case 'HomeTab':
        tabName = 'Home'
        break
      case 'ClipTab':
        tabName = 'Clip'
        break
    }

    return <Text>{tabName}</Text>
  },
  tabBarIcon: ({size, color}) => {
    let iconName: iconName = undefined

    switch (route.name) {
      case 'HomeTab':
        iconName = 'home'
        break
      case 'ClipTab':
        iconName = 'bookmark'
        break
    }

    return <FontAwesome name={iconName} size={size} color={color} />
  },
  headerShown: false
})

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="HomeTab" component={HomeStack} />
        <Tab.Screen name="ClipTab" component={ClipStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
