// WP API related actions
// action types
export const GET_POST = 'GET_POST';
export const GET_PAGE = 'GET_PAGE';

const WP_URL = 'http://www.divedapper.com/wp-json/wp/v2';

// action creators
export function getPage(slug) {
  // for errors or location blocks we set the location to null
  const defaultAction = {
    type: GET_PAGE,
    content: null
  };

  return dispatch => {
    fetch(`${WP_URL}/pages?slug=${slug}`)
      .then(response => response.json())
      .then(content =>
        dispatch({
          ...defaultAction,
          content: content[0].content.rendered + content[0].acf.faq
        })
      )
      .catch(() => {});
  };
}

// action creators
export function getPost(slug = '') {
  // for errors or location blocks we set the location to null
  const defaultAction = {
    type: GET_POST,
    content: null
  };

  return dispatch => {
    fetch(`${WP_URL}/interview${slug ? '?slug=' + slug : ''}`)
      .then(response => response.json())
      .then(content =>
        dispatch({
          ...defaultAction,
          content: {
            title: content[0].title.rendered,
            interview: content[0].content.rendered,
            acf: content[0].acf
          }
        })
      )
      .catch(() => {});
  };
}
