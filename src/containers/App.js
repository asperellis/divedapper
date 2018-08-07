import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './../components/Animations/ScrollToTop';
import 'what-input'; // tracks users input methods for a11y things

// Containers
import About from './About';
import Carnival from './Carnival';
import Error from './Error';
import Interview from './Interview';
import InterviewList from './InverviewList';

// Components
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Header />
        <main id={'mainContent'}>
          <Switch>
            {/* HOME */}
            <Route exact path="/" component={Interview} />
            {/* SPECIFIC INTERVIEW */}
            <Route path="/interview/:poet" component={Interview} />
            {/* VIEW ALL INTERVIEWS */}
            <Route exact path="/interviews" component={InterviewList} />
            {/* ABOUT */}
            <Route exact path="/about" component={About} />
            {/* CARNIVAL */}
            <Route exact path="/carnival" component={Carnival} />
            {/* 404 ERROR */}
            <Route component={Error} />
          </Switch>
        </main>
        <Footer />
      </ScrollToTop>
    </Router>
  );
};

export default App;
