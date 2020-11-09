import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import ResizableComponents from './resizable';


function App() {
  return(
    <Router>
      <Route exact path="/" component={ResizableComponents} />
    </Router>
  )
}

export default App;