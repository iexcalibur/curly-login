import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../styles';

const Separator = () => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: Colors.GRAY_SEPAROTOR,
      height: StyleSheet.hairlineWidth,
    },
  });

  return (
    <View style={styles.container} />
  );
};

export default Separator;
