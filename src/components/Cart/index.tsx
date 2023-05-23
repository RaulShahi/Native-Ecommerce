import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CartProductItemProps} from '../../constants/interfaces';
import QuantitySelector from '../QuantitySelector';

const CartProductItem = ({cartItem}: {cartItem: CartProductItemProps}) => {
  const {item: product, quantity: quantityProp} = cartItem;

  const [quantity, setQuantity] = useState(quantityProp);
  const fullStars = new Array(Math.floor(product?.avgRating))?.fill('a');
  const decRating = +product?.avgRating?.toString()?.split('.')[1];
  return (
    <View>
      <View style={styles.root}>
        <Image
          source={{
            uri: product?.image,
          }}
          style={styles.image}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {product?.title}
          </Text>
          <View style={styles.ratingsContainer}>
            {fullStars?.map((item, index) => (
              <FontAwesome
                name="star"
                size={18}
                color="#e47911"
                key={`${product.id}-${index}`}
              />
            ))}
            {decRating !== 0 && (
              <FontAwesome name="star-half-full" size={18} color="#e47911" />
            )}

            <Text>{product?.ratings}</Text>
          </View>
          <Text style={styles.price}>
            from {product?.price}
            {product?.oldPrice && (
              <Text style={styles.oldPrice}> ${product?.oldPrice}</Text>
            )}
          </Text>
        </View>
      </View>
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
    </View>
  );
};

export default CartProductItem;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  image: {height: 150, flex: 2, resizeMode: 'contain'},
  ratingsContainer: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    marginVertical: 5,
  },

  rightContainer: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  quantityContainer: {
    marginVertical: 10,
    // marginLeft:30
  },
});
