import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import ProductItem from './ProductItem';
import {ProductItemProps} from '../../constants/interfaces';

const ProductList = ({products}: {products: ProductItemProps[]}) => {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem product={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
