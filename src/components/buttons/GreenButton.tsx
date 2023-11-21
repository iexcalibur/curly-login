import {
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';

import {Colors, Mixins} from '../../styles';
import {scaleSize} from '../../styles/mixins';
import KText from '../KText';


interface IGreenButton {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  style: any;
  loading: boolean;
  textStyle?: any;
  loaderColor?: string;
}

export function GreenButton({
  title,
  onPress,
  style,
  loading,
  textStyle = {
    color: Colors.WHITE,
    fontSize: scaleSize(24),
    fontWeight: 'bold'
  },
  loaderColor = Colors.WHITE,
}: IGreenButton) {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
      {loading ? (
        <ActivityIndicator size="small" color={loaderColor} />
      ) : (
        <KText style={[textStyle]}>{title}</KText>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#0174BE',
    height: Mixins.scaleSize(47),
    width: Mixins.scaleSize(272),
    maxWidth: Mixins.scaleSize(272),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Mixins.scaleSize(20),
  },
  text: {
    color: Colors.WHITE,
    fontSize: scaleSize(24),
  },
});
