import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from './../actions/Wordpress';
import Loader from './../components/Loader/Loader';
import Hero from './../components/Hero/Hero';

// get user info and search settings to pass to the header
const mapStateToProps = state => {
  return {
    content: state.wordpress.content
  };
};

// get user location method
const mapDispatchToProps = dispatch => {
  return {
    getPageContent: slug => dispatch(getPost(slug))
  };
};

class Interview extends Component {
  componentDidMount() {
    const { poet } = this.props.match.params;
    this.props.getPageContent(poet || '');
  }

  render() {
    return (
      <article>
        {this.props.content ? (
          <div>
            <Hero
              title={this.props.content.title}
              subtitle={this.props.content.acf.hero_caption}
            />
            <div className="dd-column">
              <div
                dangerouslySetInnerHTML={{
                  __html: this.props.content.interview
                }}
              />
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </article>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Interview);
