import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../Home';
import NavigationBar from '../../components/NavigationBar';
import { routes } from '../../routes';


const App = () => (
  <div>
    <header>
      <NavigationBar />
    </header>

    <main>
      {routes.map((route) => (<Route exact path={route.path} component={route.component} />))}
    </main>
  </div>
);

export default App;