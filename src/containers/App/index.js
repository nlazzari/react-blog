import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar';
import Home from '../Home';
import Post from '../Post';

class App extends React.Component {
  render() {
    return (
    <div>
      <header>
        <NavigationBar/>
      </header>

      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/post' render={({ match }) => {
            return (
              <Switch>
                <Route path={`${match.path}/:id/:slug`} component={Post} />
                <Route path={`${match.path}/:id`} component={Post} />
              </Switch>
            );
          }} />
        </Switch>
      </main>
    </div>);
  }
}


export default App;