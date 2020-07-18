export const newPost = (post) => {
  return {
    type: '@posts:newPost',
    post,
  };
};

export const deletePost = (id) => {
  return {
    type: '@posts:deletePost',
    id,
  };
};

export const editPost = (id, value) => {
  return {
    type: '@posts:editPost',
    id,
    value,
  };
};
