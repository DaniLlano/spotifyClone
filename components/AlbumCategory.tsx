import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';

export type AlbumCategoryProps = {
    title: string,
    albums: []
}

const AlbumCategory = (props: AlbumCategoryProps) => {
  return (
    <View style={styles.container}>
        {/* Title of category */}
        {/* List of albums */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
  }
});

export default AlbumCategory;