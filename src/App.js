import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from "react-redux";
import store from './store/store'

import Index from './views/index';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path={'/'} component={Index}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
