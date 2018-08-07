// action types
export const GET_POST = 'GET_POST';
export const GET_PAGE = 'GET_PAGE';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';

const WP_URL = 'http://www.divedapper.com/wp-json/wp/v2';

// action creators
export function getPage(slug, params = '') {
  // for errors or location blocks we set the location to null
  const defaultAction = {
    type: GET_PAGE,
    content: null
  };

  return dispatch => {
    fetch(`${WP_URL}/pages?slug=${slug}&${params}`)
      .then(response => response.json())
      .then(content => {
        return dispatch({
          ...defaultAction,
          content: {
            pageHtml: content[0].content,
            customContent: content[0].acf
          }
        });
      })
      .catch(() => {});
  };
}

export function getPost(slug = '', params = '') {
  // for errors or location blocks we set the location to null
  const defaultAction = {
    type: GET_POST,
    content: null
  };

  return dispatch => {
    fetch(`${WP_URL}/interview${slug ? '?slug=' + slug : ''}${params}`)
      .then(response => response.json())
      .then(content =>
        dispatch({
          ...defaultAction,
          content: {
            title: content[0].title.rendered,
            date: content[0].date,
            number: content[0].acf.interview_number,
            interview: content[0].content.rendered,
            interviewer: content[0].acf.interviewer_name,
            caption: content[0].acf.hero_caption,
            hero: content[0].acf.hero_image,
            sideContent: [
              {
                image: content[0].acf.right_side_caption_1,
                caption: content[0].acf.right_side_caption_1
              },
              {
                image: content[0].acf.right_side_caption_2,
                caption: content[0].acf.right_side_caption_2
              },
              {
                image: content[0].acf.right_side_caption_3,
                caption: content[0].acf.right_side_caption_3
              }
            ],
            quotes: [
              {
                text: content[0].acf.long_pull_quote_1,
                type: 'long'
              },
              {
                text: content[0].acf.long_pull_quote_2,
                type: 'long'
              },
              {
                text: content[0].acf.long_pull_quote_3,
                type: 'long'
              },
              {
                text: content[0].acf.long_pull_quote_4,
                type: 'long'
              },
              {
                text: content[0].acf.long_pull_quote_5,
                type: 'long'
              },
              {
                text: content[0].acf.long_pull_quote_6,
                type: 'long'
              },
              {
                text: content[0].acf.side_pull_quote_1,
                type: 'side'
              },
              {
                text: content[0].acf.side_pull_quote_2,
                type: 'side'
              },
              {
                text: content[0].acf.side_pull_quote_3,
                type: 'side'
              },
              {
                text: content[0].acf.side_pull_quote_4,
                type: 'side'
              },
              {
                text: content[0].acf.side_pull_quote_5,
                type: 'side'
              },
              {
                text: content[0].acf.side_pull_quote_6,
                type: 'side'
              },
              {
                text: content[0].acf.side_pull_quote_7,
                type: 'side'
              },
              {
                text: content[0].acf.side_pull_quote_8,
                type: 'side'
              },
              {
                text: content[0].acf.side_pull_quote_9,
                type: 'side'
              },
              {
                text: content[0].acf.side_pull_quote_10,
                type: 'side'
              }
            ],
            about: {
              buy_link: content[0].acf.about_poet_buy_link,
              buy_link_caption: content[0].acf.about_poet_caption,
              buy_link_image: content[0].acf.about_poet_image,
              image: content[0].acf.slider_image,
              info: content[0].acf.about_poet_paragraph,
              info_link: content[0].acf.about_poet_web_link,
              further_reading: [
                {
                  caption: content[0].acf.further_reading_caption_1,
                  image: content[0].acf.further_reading_image_1,
                  link: content[0].acf.further_reading_link_1
                },
                {
                  caption: content[0].acf.further_reading_caption_2,
                  image: content[0].acf.further_reading_image_2,
                  link: content[0].acf.further_reading_link_2
                },
                {
                  caption: content[0].acf.further_reading_caption_3,
                  image: content[0].acf.further_reading_image_3,
                  link: content[0].acf.further_reading_link_3
                },
                {
                  caption: content[0].acf.further_reading_caption_4,
                  image: content[0].acf.further_reading_image_4,
                  link: content[0].acf.further_reading_link_4
                }
              ]
            }
          }
        })
      )
      .catch(() => {});
  };
}

export function getAllPosts() {
  // for errors or location blocks we set the location to null
  const defaultAction = {
    type: GET_ALL_POSTS,
    content: null
  };

  return dispatch => {
    fetch(`${WP_URL}/interview?per_page=100`)
      .then(response => response.json())
      .then(interviews =>
        dispatch({
          ...defaultAction,
          interviews: interviews.map(c => {
            return {
              title: c.title.rendered,
              slug: c.slug,
              image: c.acf.slider_image
            };
          })
        })
      )
      .catch();
  };
}
