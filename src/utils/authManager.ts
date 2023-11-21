import auth from '@react-native-firebase/auth';

class AuthManager {
  // Method to sign in using email and password
  signInWithEmail = async (email: string, password: string) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      console.log('User successfully signed in!');
      // Handle successful sign in
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    }
  };

  // Method to sign up using email and password
  signUpWithEmail = async (email: string, password: string) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      console.log('User account created & signed in!');
      // Handle successful sign up
    } catch (error) {
      console.error('Sign up error:', error);
      throw error;
    }
  };

  // Method to sign out
  signOut = async () => {
    try {
      await auth().signOut();
      console.log('User signed out!');
      // Handle successful sign out
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    }
  };

  // Method to send password reset email
  sendPasswordResetEmail = async (email: string) => {
    try {
      await auth().sendPasswordResetEmail(email);
      console.log('Password reset email sent!');
      // Handle successful email sending
    } catch (error) {
      console.error('Password reset email error:', error);
      throw error;
    }
  };
}

const authManager = new AuthManager();
export default authManager;
