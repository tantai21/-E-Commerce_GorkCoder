import './App.css';
import Header from './header/Header.js';
import {
  BrowserRouter as Router,

} from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <Switch>
        <Route path='/' exact>

        </Route>
      </Switch> */}
      </Router>
    </>
  );
}

export default App;
