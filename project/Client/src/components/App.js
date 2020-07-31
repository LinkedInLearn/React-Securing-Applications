import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import history from '../history';
import Navigation from './Navigation';
import Jumbotron from './Jumbotron';
import Feed from './Feed';
import Contact from './Contact';
import About from './About';
import Loading from './Loading';
import './App.css';


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
  async componentDidMount() {
    const url = 'http://localhost:4000/courses';
    const response = await axios.get(url);
    return this.setState({ feeds: response.data });
  }

  render() {
    const { loading } = useAuth0;

    if (loading) {
      return <Loading />;
    }

    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <Router history={history}>
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
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
