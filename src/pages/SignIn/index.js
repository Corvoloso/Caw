import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { CheckAuthenticated } from '../../redux/modules/auth/actions';

import ErrorAlert from '../../components/ErrorAlert';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  Form,
  IconContainer,
  InputContainer,
  Input,
  Button,
  ButtonText,
  /**
   * Register Tab
   */
  RegisterContainer,
  ButtonRegister,
  TextRegister,
} from './styles';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { profiles } = useSelector((state) => state.profiles);

  const dispatch = useDispatch();

  const handleSignIn = async () => {
    if (!email || !password) {
      return ErrorAlert(
        'Para realizar o login é necessário preencher os campos "email" e "senha".',
        [{ text: 'Ok' }],
      );
    }

    const userExistant = profiles.find((profile) => profile.email === email);

    if (
      userExistant &&
      userExistant.email &&
      userExistant.password === password
    ) {
      dispatch(CheckAuthenticated(userExistant));

      navigation.reset({
        index: 0,
        routes: [{ name: 'Feed' }],
      });
    } else {
      return ErrorAlert('Verifique se os dados enviados estão corretos', [
        { text: 'Ok' },
      ]);
    }
  };

  const handleRegisterNavigation = () => {
    navigation.navigate('SignUp');
  };

  return (
    <Container>
      <IconContainer>
        <Icon name="crow" size={48} color="#fff" />
      </IconContainer>

      <Form>
        <InputContainer>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <Input
            placeholder="Senha"
            textContentType="password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </InputContainer>

        <Button onPress={() => handleSignIn()}>
          <ButtonText>BORA CROCITAR!</ButtonText>
        </Button>
      </Form>

      <RegisterContainer>
        <ButtonRegister onPress={handleRegisterNavigation}>
          <TextRegister>
            Não tem um login? <TextRegister bold>cadastre-se!</TextRegister>
          </TextRegister>
        </ButtonRegister>
      </RegisterContainer>
    </Container>
  );
};

export default Login;
