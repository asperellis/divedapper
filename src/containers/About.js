import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPage } from './../actions/Wordpress';
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
    getPageContent: slug => dispatch(getPage(slug))
  };
};

class About extends Component {
  componentDidMount() {
    this.props.getPageContent('about');
  }

  render() {
    return (
      <article>
        <Hero
          title={'About Divedapper.'}
          subtitle={'A constellation of poetic phenomena.'}
        />
        <div className="dd-column">
          {this.props.content ? (
            <div
              dangerouslySetInnerHTML={{
                __html:
                  this.props.content.pageHtml.rendered +
                  this.props.content.customContent.faq
              }}
            />
          ) : (
            <Loader />
          )}
        </div>
      </article>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
