import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #22252f;
`;

export const LogOff = styled.TouchableOpacity`
  padding: 16px;
  width: 100%;
  flex-flow: row;
  justify-content: flex-end;
`;

export const List = styled.FlatList`
  width: 100%;
`;

/**
 * Card List
 */

export const CardContainer = styled.View`
  align-items: center;
`;

export const Card = styled.View`
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
