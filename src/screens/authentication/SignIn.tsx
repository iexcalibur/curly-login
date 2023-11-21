import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import AuthForm from '../../components/auth/AuthForm';
import {RootStackParamList} from '../../routes/MainRouting';
import {authStyles} from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { AuthFormType } from '../../constants';
import createAlert from '../../utils/createAlert';

type SignInProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

function SignIn({navigation}: SignInProps) {

  const onSuccess = () => {
    createAlert("Sucessfully Logged In")
  };

  return (
    <View style={authStyles.main}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <KeyboardAwareScrollView
          style={{flex: 1}}
          contentContainerStyle={{flexGrow: 1}}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={authStyles.wrap}>
            <View style={authStyles.topSection}>
              <Text style={authStyles.authHeaderText}>Login</Text>
            </View>
            <View style={authStyles.middleSection}>
              <View style={authStyles.inputWrapper}>
                <AuthForm type={AuthFormType.SignIn} onSuccess={onSuccess} navigation={navigation} />
              </View>
            </View>
          </View>
          </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    </View>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  loginText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  alreadyText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});