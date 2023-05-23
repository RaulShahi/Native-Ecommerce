import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  containerStyles?: any;
}

const Button = ({children, onPress, containerStyles}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, containerStyles]}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#e47911',
    marginVertical: 10,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#a15e1b',
    shadowColor: '#e47911',
    elevation: 4,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});
