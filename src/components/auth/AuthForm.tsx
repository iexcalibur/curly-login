import React, {useState} from 'react';
import {useController, useForm} from 'react-hook-form';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native';
import {AuthFormType} from '../../constants';
import {Colors, Mixins} from '../../styles';
import authManager from '../../utils/authManager';
import createAlert from '../../utils/createAlert';
import {GreenButton} from '../buttons/GreenButton';
import {Input} from '../Input';
import globalStyles from '../../styles/globalStyles';
import {authStyles} from '../../screens/authentication/styles';

const InputEmail = ({
  control,
  name,
  errors,
}: {
  control: any;
  name: string;
  errors: any;
}) => {
  const {field} = useController({
    name,
    control,
    rules: {
      required: true,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'invalid email address',
      },
    },
    defaultValue: '',
  });

  return (
    <View style={styles.input}>
      <Text style={styles.name}>Email</Text>
      <Input
        control={control}
        placeholder="Type email address..."
        value={field.value}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        keyboardType={'email-address'}
        returnKeyType={'done'}
        style={{fontStyle: 'italic'}}
      />
      {errors.email &&
        (errors.email.message ? (
          <Text style={styles.errorText}>Invalid Email Address</Text>
        ) : (
          <Text style={styles.errorText}>This field is required</Text>
        ))}
    </View>
  );
};

const InputPassword = ({
  control,
  name,
  errors,
}: {
  control: any;
  name: string;
  errors: any;
}) => {
  const {field} = useController({
    name,
    control,
    rules: {required: true},
    defaultValue: '',
  });
  return (
    <View style={styles.input}>
      <Text style={styles.name}>Password</Text>
      <Input
        control={control}
        placeholder="Type password..."
        value={field.value}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        secureTextEntry
        returnKeyType={'done'}
      />
      {errors.password && (
        <Text style={styles.errorText}>This field is required</Text>
      )}
    </View>
  );
};

const InputPasswordConfirm = ({
  control,
  name,
  errors,
}: {
  control: any;
  name: string;
  errors: any;
}) => {
  const {field} = useController({
    name,
    control,
    rules: {required: true},
    defaultValue: '',
  });
  return (
    <View style={styles.input}>
      <Text style={styles.name}>Confirm Password</Text>
      <Input
        control={control}
        placeholder="Confirm password..."
        value={field.value}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        secureTextEntry
        returnKeyType={'done'}
      />
      {errors.passwordConfirm && (
        <Text style={styles.errorText}>This field is required</Text>
      )}
    </View>
  );
};

const AuthForm = ({
  type = AuthFormType.SignIn,
  onSuccess = () => {},
  navigation = null,
}: {
  type: AuthFormType;
  onSuccess: Function;
  navigation: any;
}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: {
    email: string;
    password: string;
    passwordConfirm: string;
  }) => {
    const {email, password, passwordConfirm} = data;

    if (type === AuthFormType.SignUp && password !== passwordConfirm) {
      createAlert('Passwords do not match!');
      return;
    }

    setLoading(true);
    try {
      if (type === AuthFormType.SignIn) {
        await authManager.signInWithEmail(email, password);
      } else if (type === AuthFormType.SignUp) {
        await authManager.signUpWithEmail(email, password);
      }
      onSuccess();
      reset({
        email: '',
        password: '',
        passwordConfirm: '',
      });
    } catch (error) {
      //@ts-ignore
      if (error.code) {
        //@ts-ignore
        switch (error.code) {
          case 'auth/email-already-in-use':
            createAlert('An account with this email already exists.');
            break;
          case 'auth/invalid-email':
            createAlert('Invalid email format.');
            break;
          case 'auth/invalid-credential':
            createAlert('Incorrect Password');
            break;
          default:
            createAlert('An error occurred. Please try again.');
        }
      } else {
        createAlert(`${error}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const btnTitle =
    type === AuthFormType.SignIn
      ? 'LOGIN'
      : type === AuthFormType.SignUp
      ? 'REGISTER'
      : '';

  return (
    <View style={styles.wrapper}>
      <InputEmail name="email" control={control} errors={errors} />
      <>
        <InputPassword name="password" control={control} errors={errors} />
        {type === AuthFormType.SignUp && (
          <InputPasswordConfirm
            name="passwordConfirm"
            control={control}
            errors={errors}
          />
        )}
        {type === AuthFormType.SignIn && (
          <>
            <View
              style={{
                maxWidth: 300,
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <View style={globalStyles.row}>
                <View>
                  <Text style={[authStyles.accountText, {textAlign: 'center'}]}>
                    Don't have an account?
                  </Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}>
                    <Text style={[authStyles.alreadyText]}> Register Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </>
        )}
        {type === AuthFormType.SignUp && (
          <>
            <View style={{maxWidth: 300, justifyContent: 'center'}}>
              <View style={globalStyles.row}>
                <Text style={[authStyles.accountText, {textAlign: 'center'}]}>
                  Already have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                  <Text style={[authStyles.alreadyText]}> Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </>
      <GreenButton
        title={btnTitle}
        onPress={handleSubmit(onSubmit)}
        loading={loading}
        style={{top: Mixins.scaleSize(550), position: 'absolute'}}
      />
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  input: {
    marginBottom: Mixins.scaleSize(25),
    placeholderTextColor: 'red', // Change the color here
  },
  errorText: {
    marginTop: 3,
    color: '#f00',
    fontStyle: 'italic',
  },
  forgotPasswordButtonText: {
    fontSize: Mixins.scaleFont(14),
    color: Colors.BLUE,
    textAlign: 'right',
    fontWeight: 'bold',
    marginBottom: Mixins.scaleSize(18),
  },
  name: {
    marginLeft: 5,
    fontSize: Mixins.scaleFont(17),
    color: Colors.BLACK,
    marginBottom: 5,
  },
});

const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
});
