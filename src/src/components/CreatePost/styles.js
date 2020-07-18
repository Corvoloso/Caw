import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background: #22252f;

  flex-flow: column;
  align-items: center;
  padding-top: ${StatusBar.currentHeight}px;
`;

export const Title = styled.Text`
  font-size: 16px;
  max-width: 75%;
  text-align: center;
  color: #fff;
`;

export const TextAreaContainer = styled.View`
  width: 100%;
  margin-top: 16px;
  flex-flow: row;
  justify-content: center;
  align-items: center;
`;

export const TextArea = styled.TextInput`
  width: 75%;
  height: 100px;
  background: #fff;
  text-align-vertical: top;
`;

export const Submit = styled.TouchableOpacity`
  position: absolute;
  right: 10%;
  bottom: -10%;

  height: 50px;
  width: 50px;
  border-radius: ${50 / 2}px;
  background: #282b33;
  justify-content: center;
  align-items: center;
`;

export const Remaining = styled.Text`
  font-size: 16px;
  padding-vertical: 16px;
  color: #fff;
`;
