/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View>
      <Icon name="rocket" size={30} color="#900" />
    </View>
  );
}

export default App;
