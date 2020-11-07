import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import {BrowserRouter  as Router , Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Nav from './components/Nav'

function App() {
  return (
    <Provider store = {store}>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cart" >
            <Cart />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
