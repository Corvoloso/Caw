import produce from 'immer';

const INITIAL_STATE = {
  profiles: [
    {
      id: 1,
      username: 'Corvoloso',
      email: 'igoralves.b18@gmail.com',
      password: '123',
    },
  ],
};

export default function ProfilesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@profiles:AddProfile':
      return produce(state, (draft) => {
        draft.profiles.push(action.userData);
      });
    default:
      return state;
  }
}
