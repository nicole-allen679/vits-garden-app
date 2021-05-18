import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Orders from './Scenes/Orders'
import Products from './Scenes/Products'
import Users from './Scenes/Users'
import Login from './Scenes/Login'

function App() {
  return (
    <>
    <Router>
      <Header/>
    <Switch>
    <Route path='/users' component={Users} />
      <Route path='/products' component={Products} />
      <Route path='/orders' component={Orders} />
      <Route path='/' component={Login} />
    </Switch>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
