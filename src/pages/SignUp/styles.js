import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #22252f;
  justify-content: center;
`;

/**
 * Login Form
 */

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 16px;
`;

export const Title = styled.Text`
  max-width: 75%;
  font-size: 16px;
  color: #fff;
  text-align: center;
`;

export const Input = styled.TextInput`
  background-color: rgba(255, 255, 255, 1);

  width: 100%;
  margin-top: 16px;
  border-radius: 8px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  margin: 16px;

  background: #282b33;
  border-radius: 8px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #7f848d;
`;
