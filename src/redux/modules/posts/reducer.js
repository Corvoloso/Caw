import produce from 'immer';

const INITIAL_STATE = {
  posts: [
    {
      userId: Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1),
      id: 'a065aff4-51db-479a-9518-bf7f97204fbe',
      username: 'Rodolfo Souza',
      content:
        'Lucas ipsum dolor sit amet solo fett darth hutt skywalker chewbacca jawa darth secura luke. Jawa yavin moff fett dooku kashyyyk skywalker mara naboo. Ben organa mustafar gonk. Mon organa jade baba lars c-3p0.',
      date: 1043292824,
    },
    {
      userId: Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1),
      id: '906de8f4-a4eb-4887-90e9-357a1c51cceb',
      username: 'Victor Manuel',
      content:
        'Han grievous solo mothma kashyyyk jango. Skywalker mon fett ackbar jango solo ventress. Solo biggs ben skywalker. Skywalker anakin jinn anakin skywalker dooku jade.',
      date: 960963451,
    },
    {
      userId: Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1),
      id: '62285f2e-f2b2-47fc-8077-7497e96764ba',
      username: 'Victor Oshiro',
      content:
        'Mustafar organa yavin obi-wan calrissian padmé. Luke jango mace padmé mothma gamorrean. Jade organa yoda aayla darth coruscant padmé.',
      date: 990156824,
    },
    {
      userId: Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1),

      id: '62285f2e-f2b2-47fc-8017-7497e96764ba',
      username: 'Isabela Lazarin',
      content:
        'Mustafar organa yavin obi-wan calrissian padmé. Luke jango mace padmé mothma gamorrean. Jade organa yoda aayla darth coruscant padmé.',
      date: 990156824,
    },
    {
      userId: Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1),

      id: '62285f2e-f2b2-4a2c-8017-7497e96764ba',
      username: 'Fernanda Barroso',
      content:
        'Mustafar organa yavin obi-wan calrissian padmé. Luke jango mace padmé mothma gamorrean. Jade organa yoda aayla darth coruscant padmé.',
      date: 990156824,
    },
  ],
};

const PostsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@posts:newPost':
      return produce(state, (draft) => {
        draft.posts.unshift(action.post);
      });
    case '@posts:editPost':
      return produce(state, (draft) => {
        draft.posts[action.id].content = action.value;
      });
    case '@posts:deletePost':
      return produce(state, (draft) => {
        draft.posts.splice(action.id, 1);
      });
    default:
      return state;
  }
};

export default PostsReducer;
