import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';
import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button/intex';

const ProductScreen = () => {
  const [selectedColor, setSelectedColor] = useState(
    product?.options?.[0] || null,
  );
  const [quantity, setQuantity] = useState(0);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>

      <Text>Image Carousels</Text>

      {/* Option Selector */}
      <Picker
        selectedValue={selectedColor}
        onValueChange={(value, index) => setSelectedColor(value)}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} key={option} />
        ))}
      </Picker>

      <Text style={styles.price}>
        from {product?.price}
        {product?.oldPrice && (
          <Text style={styles.oldPrice}> ${product?.oldPrice}</Text>
        )}
      </Text>
      <Text style={styles.description}>{product.description}</Text>

      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      <Button
        onPress={() => {
          console.log('Add to Cart');
        }}>
        <Text>Add To Cart</Text>
      </Button>
      <Button
        onPress={() => {
          console.log('Buy Now');
        }}>
        <Text>Buy Now</Text>
      </Button>
      <FontAwesome name="heart-o" />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 14,
    color: 'gray',
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
  description: {
    color: 'black',
    marginVertical: 10,
    lineHeight: 20,
  },
});
