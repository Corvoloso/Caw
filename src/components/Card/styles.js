import styled from 'styled-components';

export const CardContainer = styled.View`
  background: #282b33;
  width: 80%;
  padding: 16px;
  margin-vertical: 16px;
  border-radius: 8px;
`;

export const CardDataContainer = styled.View`
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const DateText = styled.Text`
  color: #7f848d;
  font-size: 14px;
`;

export const Description = styled.Text`
  color: #7f848d;
  font-size: 14px;
  padding-top: 16px;
`;

export const CardActions = styled.View`
  flex: 1;
  margin: 4px;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Button = styled.TouchableOpacity`
  padding: 4px;
  margin-horizontal: 8px;
`;
