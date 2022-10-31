import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';

export type AlbumProps = {
    album: {
        id: string;
        imageUri: string;
        artistHeadline: string;
    }
    
}

const Album = (props: AlbumProps) => {
  return (
    <View style={styles.container}>
        <Image source={{ uri: props.album.imageUri}} style={styles.image} />
        <Text style={styles.text}>{props.album.artistHeadline}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
  },
  image: {
    width: '100%',
    height: 200
  },
  text: {
    color: 'grey',
    marginTop: 10,
  }
});

export default Album;