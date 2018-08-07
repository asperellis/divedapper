import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPage, getAllPosts } from './../actions/Wordpress';
// import Loader from './../components/Loader/Loader';
import Hero from './../components/Hero/Hero';

// get user info and search settings to pass to the header
const mapStateToProps = state => {
  return {
    content: state.wordpress.content,
    interviews: state.wordpress.interviews
  };
};

// get user location method
const mapDispatchToProps = dispatch => {
  return {
    getPageContent: (slug, params) => dispatch(getPage(slug, params)),
    getAllPosts: () => dispatch(getAllPosts())
  };
};

class InverviewList extends Component {
  componentDidMount() {
    this.props.getPageContent('interviews');
    this.props.getAllPosts();
  }

  render() {
    return (
      <article>
        <Hero
          title={'Interview Archive.'}
          subtitle={'A constellation of poetic phenomena.'}
        />
        <div className="dd-column">
          {this.props.content && (
            <div
              dangerouslySetInnerHTML={{
                __html: this.props.content.pageHtml.rendered
              }}
            />
          )}
          {this.props.interviews.length ? (
            this.props.interviews.map(c => <p key={c.slug}>{c.slug}</p>)
          ) : (
            <p>Getting Interviews</p>
          )}
        </div>
      </article>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InverviewList);
