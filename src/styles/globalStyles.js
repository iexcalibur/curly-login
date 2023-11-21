import {Platform, StyleSheet} from 'react-native';
import {Typography, Mixins, Colors} from '.';

const globalStyles = StyleSheet.create({
  alignCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexAlignCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  row: {
    flexDirection: 'row',
  },
  containerPadding: {
    ...Mixins.padding(15, 15, 15, 15),
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  rowBetweenCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  Semibold14: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: Colors.FONT,
  },

  textPrimary: {
    color: Colors.PRIMARY,
  },

  shadow:
    Platform.OS == 'android'
      ? {
          shadowColor: Colors.FONT,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 2,
          margin: 5,
          backgroundColor: Colors.WHITE,
        }
      : {
          //   backgroundColor: backgroundColor,
          shadowColor: Colors.FONT,
          shadowRadius: 3.84,
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          elevation: 2,
          margin: 5,
        },
});

export default globalStyles;
