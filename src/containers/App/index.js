import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar';
import Home from '../Home';
import Post from '../Post';
import Category from '../Category';

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
          <Route path='/category' render={({ match }) => {
              return (
                <Route path={`${match.path}/:category`} component={Category} />
              );
            }} />
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