let initialState = {
  sidebar: false,
};

export default function AnimationReducer(state = initialState, action) {
  const {type} = action;
  switch (type) {
    case 'Toggle Sidebar':
      return {...state, sidebar: !state.sidebar};
    default:
      return state;
  }
}
