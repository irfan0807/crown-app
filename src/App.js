import React, { useEffect, useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/shop.jsx';
import Header from './componets/header-component/Header'
import SignIn from './pages/signIn-Signup/signIn-signup';
import { auth } from './firebase/firebase.utils'



// useRef = unsubscribe = null;

function App() {
  const [currentUser, setCurrentUser] = useState(null);



  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    })
    console.log(currentUser);




  }, [currentUser]);






  return (

    <div>
      <Header currentUser={currentUser} />
      <Switch >
        <Route exact path='/' component={Homepage} />
        <Route path='/shops' component={ShopPage} />
        <Route path='/signin' component={SignIn} />4
      </Switch>
    </div>





  );
}

export default App;
