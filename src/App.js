import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Index from './components/views/heroIndex';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={Index} />
      </Switch>
    </Router>
  );
}

export default App;
