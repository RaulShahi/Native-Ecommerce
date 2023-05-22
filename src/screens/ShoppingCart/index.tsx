import {StyleSheet, View, ScrollView, FlatList} from 'react-native';
import products from '../../data/cart';
import CartProductItem from '../../components/Cart';

const ShoppingCartScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
      />
    </View>
  );
};

export default ShoppingCartScreen;

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
