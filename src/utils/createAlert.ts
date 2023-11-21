import {Alert} from 'react-native';

export default function createAlert(title: string, body?: string) {
  Alert.alert(title, body);
}
