import { Keyboard, StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import React from 'react';
import { Colors, Mixins } from './../styles';

export function Input(props: TextInputProps & { control?: any }) {
  return (
    <View style={[styles.container, props.style]}>
      
        <TextInput
          placeholderTextColor={Colors.WHITE}
          {...props}
          style={[styles.input]}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Mixins.scaleSize(35),
    overflow: 'hidden',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#B9B9B9',
  },
  input: {
    borderRadius: 5,
    padding: 8,
    width: Mixins.scaleSize(272),
    maxWidth: Mixins.scaleSize(272),
    height: '100%',
    color: Colors.BLACK,
    backgroundColor: Colors.WHITE,
    fontStyle: 'italic',
  },
});
