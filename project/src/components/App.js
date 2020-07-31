import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Jumbotron from './Jumbotron';
import Feed from './Feed';
import Contact from './Contact';
import About from './About';
import data from '../data/data.json';
import './App.css';

const createMarkup = () => {
  return {_html: 'I\'m so dangerous you could feel it'}
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Manny Henri',
      jumbotronTitle: 'List of courses',
      feeds: [],
    };
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    this.setState({
      feeds: data,
    });
  }

  render() {
    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <Router>
        <div className="container">
          <Navigation />
          {/* eslint-disable-next-line react/destructuring-assignment */}
          <Jumbotron title={this.state.jumbotronTitle} />
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route
              exact
              path="/"
              /* eslint-disable-next-line no-unused-vars */
              render={(props) => (
                <Feed feeds={this.state.feeds} />
              )}
            />
          </Switch>
          <div className="footer">
            <p>
              &copy;
              {this.state.name}
              {' '}
              Inc.
            </p>
            <div innerHTML={createMarkup()}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
