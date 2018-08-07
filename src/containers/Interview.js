import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from './../actions/Wordpress';
import Loader from './../components/Loader/Loader';
import Hero from './../components/Hero/Hero';
import { formatDate } from './../utils/utils';
import styles from './Interview.css';

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

const AboutInterview = ({ name = 'The Poet', image = '', info = '' }) => {
  return (
    <div className={styles.about}>
      <div className="dd-column-wide">
        <div className={styles.aboutContent}>
          {image && (
            <img
              src={image}
              alt={`Headshot of ${name}`}
              className={styles.aboutContentImage}
            />
          )}
          <div className={styles.aboutContentText}>
            <h4>About {name}</h4>
            <p
              dangerouslySetInnerHTML={{
                __html: info
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const InterviewFooter = ({ date = '' }) => {
  return (
    <div className="dd-column-wide">
      <div className={styles.interviewFooter}>
        <div>
          Interview Posted<br />
          {formatDate(date)}
        </div>
        <div className={styles.interviewFooterShare}>
          <span className={'bold'}>SHARE THIS INTERVIEW</span>
          <div>Icons here</div>
        </div>
        <div>
          Read more interviews in the<br />
          <a href="/interviews" className={'bold'}>
            divedapper archive
          </a>
        </div>
      </div>
    </div>
  );
};

const NextInterview = () => {
  return (
    <div className={styles.nextInterview}>
      <div className="dd-column">
        <div className={styles.nextInterviewText}>
          <p>NEXT INTERVIEW</p>
          <h2>Name Here</h2>
          <p>By line goes here with a lot more text and such.</p>
        </div>
      </div>
    </div>
  );
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
              subtitle={this.props.content.caption}
              interviewer={this.props.content.interviewer}
              image={this.props.content.hero}
            />
            <div className="dd-column">
              <div
                className={styles.interview}
                dangerouslySetInnerHTML={{
                  __html: this.props.content.interview
                }}
              />
            </div>
            <AboutInterview
              name={this.props.content.title}
              image={this.props.content.about.image}
              info={this.props.content.about.info}
            />
            <InterviewFooter date={this.props.content.date} />
            <NextInterview />
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
