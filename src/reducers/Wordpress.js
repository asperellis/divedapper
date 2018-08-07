// user related reducer for managing things like logged in and location
export const wordpress = (
  state = { content: null, interviews: [] },
  action
) => {
  if (action.type === 'GET_PAGE' || action.type === 'GET_POST') {
    return { ...state, content: action.content };
  }

  if (action.type === 'GET_ALL_POSTS') {
    return { ...state, interviews: action.interviews };
  }

  return state;
};
