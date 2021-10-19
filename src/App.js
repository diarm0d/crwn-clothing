import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/ShopPage';
import { signInSignUpPage } from './pages/sign-in-sign-up/sign-in-sign-up';
import { Header } from './components/header/Header';
import { auth, createUserProfileDocument  } from './firebase/firebase';
import React from 'react';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
      createUserProfileDocument(user);
   })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  
  
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign-in' component={signInSignUpPage} />
        </Switch>
      </div>
    ); 
  }
}

export default App;
