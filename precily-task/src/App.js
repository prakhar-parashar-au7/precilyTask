import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ResizableComponents from './resizable';
import Main from './Main';

function App() {
  return(
    <Router>
      <Route exact path="/" component={ResizableComponents} />
        <Route exact path="/partTwo" component={Main} />
    </Router>
  )
}

export default App;