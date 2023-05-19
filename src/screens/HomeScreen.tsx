import {StyleSheet, Text, View, Image} from 'react-native';
import Products from '../components/Products';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <Products />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
