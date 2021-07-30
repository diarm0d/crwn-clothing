import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/ShopPage';
import { signInSignUpPage } from './pages/sign-in-sign-up/sign-in-sign-up';
import { Header } from './components/header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/sign-in' component={signInSignUpPage} />
      </Switch>
    </div>
  ); 
}

export default App;
