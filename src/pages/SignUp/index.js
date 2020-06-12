import React, { useState } from 'react';
import { Alert } from 'react-native';

import { useDispatch } from 'react-redux';

import { CheckAuthenticated } from '../../redux/modules/auth/actions';
import { AddProfile } from '../../redux/modules/profiles/actions';

import ErrorAlert from '../../components/ErrorAlert';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, Title, Form, Input, Button, ButtonText } from './styles';

const Register = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleRegister = async () => {
    if (!username || !email || !password) {
      return ErrorAlert(
        'Não foi possível realizar seu cadastro, verifique se os campos foram preenchidos corretamente.',
        [{ text: 'Ok' }],
      );
    }

    const userData = {
      id: Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1),
      username,
      email,
      password,
    };

    try {
      dispatch(CheckAuthenticated(userData));
      dispatch(AddProfile(userData));

      if (!userData) {
        return Alert.alert(
          'Oops',
          'Não foi possível realizar seu cadastro, verifique se os campos foram preenchidos corretamente.',
          [{ text: 'Ok' }],
        );
      }

      navigation.reset({
        index: 0,
        routes: [{ name: 'Feed' }],
      });
    } catch (err) {
      console.log(`ERROR - ${err}`);
    }
  };

  return (
    <Container>
      <Form>
        <Icon name="crow" size={48} color="#fff" />
        <Title>Corvos amam crocitar, torne-se um corvo você também!</Title>

        <Input
          keyboardAppearance="dark"
          placeholder="Digite seu nome"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <Input
          keyboardAppearance="dark"
          placeholder="Digite seu email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          keyboardAppearance="dark"
          textContentType="password"
          secureTextEntry={true}
          placeholder="Digite uma senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Button onPress={handleRegister}>
          <ButtonText>Finalizar cadastro!</ButtonText>
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
