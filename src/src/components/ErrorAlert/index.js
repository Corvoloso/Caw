import { Alert } from 'react-native';

const ErrorAlert = (description, buttons) => {
  return Alert.alert('Oops', description, buttons);
};

export default ErrorAlert;
