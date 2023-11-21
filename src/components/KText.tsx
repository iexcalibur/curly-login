import React from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import {Typography} from '../styles';


const KText: React.FC<TextProps> = ({children, style: propStyle, ...otherProps}) => {
  let appliedStyle: StyleProp<TextStyle> = [styles.default];

  if (propStyle) {
    if (Array.isArray(propStyle)) {
      appliedStyle = appliedStyle.concat(propStyle);
    } else {
      appliedStyle.push(propStyle);
    }
  }

  return <Text {...otherProps} style={appliedStyle}>{children}</Text>;
};

const styles = StyleSheet.create({
  default: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
});

export default KText;
