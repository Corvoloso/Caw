import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #22252f;
  justify-content: center;
`;

export const Form = styled.View`
  justify-content: center;
`;

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.View``;

export const Input = styled.TextInput`
  background-color: rgba(255, 255, 255, 1);

  margin: 16px;
  border-radius: 8px;
`;

export const Button = styled.TouchableOpacity`
  margin: 16px;
  height: 48px;
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

export const RegisterContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ButtonRegister = styled.TouchableOpacity``;

export const TextRegister = styled.Text`
  color: ${(props) => (props.bold ? '#7f848d' : '#fff')};
`;
