import React, { useEffect, useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/shop.jsx';
import Header from './componets/header-component/Header'
import SignIn from './pages/signIn-Signup/signIn-signup';
import { auth, createUserProfileDocuments } from './firebase/firebase.utils'



// useRef = unsubscribe = null;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocuments(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;