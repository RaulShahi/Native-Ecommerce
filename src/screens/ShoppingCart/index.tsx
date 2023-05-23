import {StyleSheet, View, ScrollView, FlatList, Text} from 'react-native';
import products from '../../data/cart';
import CartProductItem from '../../components/Cart';
import Button from '../../components/Button/intex';

const ShoppingCartScreen = () => {
  const priceList = products.map(
    product => product.quantity * product.item.price,
  );
  const totalPrice = priceList.reduce((a, c) => a + c, 0).toFixed(2);
  return (
    <View style={styles.page}>
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Text
              style={{
                fontSize: 18,

                color: '#000',
              }}>
              {`Subtotal (${products.length} items): `}
              <Text style={{color: '#e47911', fontWeight: 'bold'}}>
                ${`${totalPrice}`}
              </Text>
            </Text>
            <Button
              onPress={() => {
                console.log('Proceed to checkout');
              }}
              containerStyles={{
                backgroundColor: '#f7e300',
                borderColor: '#f7e300',
              }}>
              <Text style={{color: '#000'}}>Proceed to Checkout</Text>
            </Button>
          </View>
        )}
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
