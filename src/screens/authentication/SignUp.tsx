import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import {
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AuthForm from '../../components/auth/AuthForm';
import { AuthFormType } from '../../constants';
import {RootStackParamList} from '../../routes/MainRouting';
import globalStyles from '../../styles/globalStyles';
import authManager from '../../utils/authManager';
import {authStyles} from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import createAlert from '../../utils/createAlert';

type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

function SignUp({navigation}: SignUpProps) {
  const onSuccess = () => {
    createAlert("Successfully Registered")
    navigation.navigate('SignIn');
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
              <Text style={authStyles.authHeaderText}>Register</Text>
            </View>
            <View style={authStyles.middleSection}>
              <View style={authStyles.inputWrapper}>
                <AuthForm onSuccess={onSuccess} type={AuthFormType.SignUp}  navigation={navigation} />
              </View>
            </View>
          </View>
          </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    </View>
  );
}

export default SignUp;
