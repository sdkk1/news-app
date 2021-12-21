import { StyleSheet, View } from 'react-native';
import ListItem from './components/news';

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        imageUrl='https://picsum.photos/id/10/200/200'
        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation'
        author='ReactNews'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
