/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {StatusBar, useColorScheme, View, SafeAreaView} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import ProductScreen from './src/screens/ProductScreen/ProductScreen';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ShoppingCartScreen from './src/screens/ShoppingCart';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      {/* <HomeScreen /> */}
      {/* <ProductScreen /> */}
      <ShoppingCartScreen />
    </SafeAreaView>
  );
}

export default App;
