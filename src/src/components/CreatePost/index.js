import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  Title,
  TextAreaContainer,
  TextArea,
  Submit,
  Remaining,
} from './styles';

const CreatePost = ({
  value,
  changeValue,
  handleSubmit,
  handleEdit,
  editing,
}) => {
  return (
    <Container>
      <Title>Digite embaixo seus pensamentos para mostrá-los ao mundo!</Title>
      <TextAreaContainer>
        <TextArea
          value={value}
          maxLength={280}
          multiline={true}
          placeholder="Digite aqui sua mensagem"
          onChangeText={(text) => changeValue(text)}
        />
        {editing ? (
          <Submit onPress={handleEdit}>
            <Icon name="edit" color="#7f848d" size={32} />
          </Submit>
        ) : (
          <Submit onPress={handleSubmit}>
            <Icon name="caret-right" color="#7f848d" size={32} />
          </Submit>
        )}
      </TextAreaContainer>

      <Remaining>{value ? value.length : '0'}/280</Remaining>
    </Container>
  );
};

export default CreatePost;
