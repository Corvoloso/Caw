import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  newPost,
  deletePost,
  editPost,
} from '../../redux/modules/posts/actions';

import { formatDate } from '../../utils';

import Icon from 'react-native-vector-icons/FontAwesome5';

import CreatePost from '../../components/CreatePost';
import ErrorAlert from '../../components/ErrorAlert';

import {
  Container,
  LogOff,
  List,
  /**
   * Feed Cards
   */
  CardContainer,
  Card,
  CardDataContainer,
  Text,
  DateText,
  Description,
  /**
   * Card Actions
   */
  CardActions,
  Button,
} from './styles';

import { Alert } from 'react-native';

const Feed = ({ navigation }) => {
  const [value, setValue] = useState('');
  const [editing, setEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [posts, setPosts] = useState([]);

  const { posts: storagedPosts } = useSelector(state => state.posts);
  const { userLogged } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (!value) {
      ErrorAlert(
        'Parece que você não escreveu uma mensagem, escreva algo antes de enviar uma mensagem.',
        [{ text: 'Ok' }],
      );
    }

    dispatch(
      newPost({
        id: Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1),
        userId: userLogged.id,
        username: userLogged.username,
        content: value,
        date: new Date().toLocaleDateString('pt-br'),
      }),
    );

    setValue('');
  };

  const handleDeletePost = id => {
    dispatch(deletePost(id));
  };

  const handleEditPost = () => {
    dispatch(editPost(editingIndex, value));

    setEditing(false);
  };

  useEffect(() => {
    setPosts(storagedPosts);
  }, [storagedPosts]);

  return (
    <Container>
      <LogOff
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'SignIn' }],
          })
        }
      >
        <Icon
          name="sign-out-alt"
          size={24}
          color="#f666"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'SignIn' }],
            })
          }
        />
      </LogOff>

      <CreatePost
        value={value}
        changeValue={setValue}
        handleSubmit={handleSubmit}
        handleEdit={handleEditPost}
        editing={editing}
      />

      <List
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item: post, index }) => (
          <CardContainer>
            <Card>
              <CardDataContainer>
                <Text>{post.username}</Text>
                <DateText>{formatDate(post.date)}</DateText>
              </CardDataContainer>
              <Description>{post.content}</Description>

              {userLogged.id === post.userId && (
                <CardActions>
                  <Button
                    onPress={() => {
                      setEditing(!editing);
                      setEditingIndex(index);
                      setValue(post.content);
                    }}
                  >
                    <Icon
                      name="pen"
                      size={14}
                      color={editing ? '#fff' : '#707080'}
                    />
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
        )}
      />
    </Container>
  );
};

export default Feed;
