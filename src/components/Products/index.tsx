import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProductList from './ProductList';
import products from '../../data/products';

const Products = () => {
  return (
    <View>
      <ProductList products={products} />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
