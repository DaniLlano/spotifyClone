import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import Album from '../components/Album';
import { RootTabScreenProps } from '../types';

const album = {
  id: '1',
  imageUri: 'https://www.thakzhan.de/content/images/2022/05/Level-2---Spotify-Cover-version-2-1.jpg',
  artistHeadline: 'Taylor Swift, Kygo, Lauv, Avicii, James Arthur'
}


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Album album={album} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
