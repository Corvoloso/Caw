import React from 'react';

import { useSelector } from 'react-redux';

import { formatDate } from '../../utils';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Alert } from 'react-native';
import {
  CardContainer,
  CardDataContainer,
  DateText,
  Text,
  Description,
  CardActions,
  Button,
} from './styles';

const Card = ({ post, index, handleDeletePost, handleEditing }) => {
  const { userLogged } = useSelector((state) => state.auth);

  return (
    <CardContainer>
      <Card>
        <CardDataContainer>
          <Text>{post.userName}</Text>
          <DateText>{formatDate(post.postData)}</DateText>
        </CardDataContainer>
        <Description>{post.postContent}</Description>

        {userLogged.id === post.postId && (
          <CardActions>
            <Button onPress={handleEditing}>
              <Icon name="pen" size={14} color={editing ? '#fff' : '#707080'} />
            </Button>
            <Button
              onPress={() =>
                Alert.alert(
                  'Exclusão',
                  'Deseja realmente excluir essa postagem?',
                  [
                    {
                      text: 'Cancelar',
                    },
                    {
                      text: 'Sim',
                      onPress: () => handleDeletePost(index),
                    },
                  ],
                )
              }
            >
              <Icon name="trash" size={14} color="#707080" />
            </Button>
          </CardActions>
        )}
      </Card>
    </CardContainer>
  );
};

export default Card;
