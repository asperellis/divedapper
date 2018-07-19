// user related reducer for managing things like logged in and location
export const wordpress = (state = { content: null }, action) => {
  if (action.type === 'GET_PAGE' || action.type === 'GET_POST') {
    return { ...state, content: action.content };
  }

  return state;
};
