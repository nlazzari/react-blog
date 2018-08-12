import React from 'react';
import { Route } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar';
import { routes } from '../../routes';


const App = () => (
  <div>
    <header>
      <NavigationBar />
    </header>

    <main>
      {routes.map((route) => (
        <Route
          exact
          key={`app-key-${route.component}${route.path}`}
          path={route.path}
          component={route.component}
        />))}
    </main>
  </div>
);

export default App;