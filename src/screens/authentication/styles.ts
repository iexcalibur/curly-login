import {Dimensions, StyleSheet} from 'react-native';
import {Colors, Mixins} from '../../styles';

const {width, height} = Dimensions.get('window');

export const authStyles = StyleSheet.create({
  main: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: width,
  },
  wrap: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    flexDirection: 'column',
    marginTop: 31,
  },
  inputEmail: {
    marginBottom: 35,
  },
  inputPassword: {
    marginBottom: 35,
  },
  middleSection: {
    height: Mixins.scaleSize(400),
    width: Mixins.scaleSize(280),
    maxWidth: 280,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topSection: {
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: (10 / 100) * height,
  },

  imgBtn: {
    ...Mixins.margin(0, 15, 0, 15),
  },
  authHeaderText: {
    fontSize: Mixins.scaleSize(24),
    color: Colors.BLACK,
    fontWeight: 'bold',
    marginBottom: 17.9,
  },
  authSubtitleText: {
    paddingHorizontal: Mixins.scaleSize(40),
    textAlign: 'center',
    fontSize: Mixins.scaleSize(18),
    color: Colors.BLACK,
    marginBottom: Mixins.scaleSize(30),
  },
  loginText: {
    fontSize: Mixins.scaleSize(24),
    color: Colors.GRAY_DARK,
    marginBottom: 17.9,
  },
  authIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20.6,
  },
  bottomSection: {
    position: 'absolute',
    bottom: Mixins.scaleSize(-90),
    alignSelf: 'center',
    alignItems: 'center',
  },
  accountText: {
    fontSize: Mixins.scaleSize(14),
    fontWeight: 'bold',
    color: '#0174BE'
  },
  alreadyText: {
    fontSize: Mixins.scaleSize(15),
    fontWeight: 'bold',
    color:'#0174BE'
  },
});
