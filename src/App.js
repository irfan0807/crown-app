import React, { useEffect, useState } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/shop.jsx';
import Header from './componets/header-component/Header'
import SignIn from './pages/signIn-Signup/signIn-signup';
import { auth, createUserProfileDocuments } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions';




// useRef = unsubscribe = null;

// class App extends React.Component {
//   // constructor() {
//   //   super();

//   //   this.state = {
//   //     currentUser: null
//   //   };
//   // }

//   unsubscribeFromAuth = null;

//   componentDidMount() {
//     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
//       if (userAuth) {
//         const userRef = await createUserProfileDocuments(userAuth);

//         // userRef.onSnapshot(snapShot => {
//         //   this.setState({
//         //     currentUser: {
//         //       id: snapShot.id,
//         //       ...snapShot.data()
//         //     }
//         //   });

//         //   console.log(this.state);
//         // });
//         userRef.onSnapshot(snapShot => {
//           setCurrentUser({
//             id: snapShot.id,
//             ...snapShot.data()
//           })
//         })
//       }

//       setCurrentUser({ userAuth });
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribeFromAuth();
//   }

//   render() {
//     return (
//       <div>
//         <Header />
//         <Switch>
//           <Route exact path='/' component={Homepage} />
//           <Route path='/shops' component={ShopPage} />
//           <Route path='/signin' component={SignIn} />
//         </Switch>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch) => ({

//   setCurrentUser: user => dispatch(setCurrentUser(user))


// })


// export default connect(null, mapDispatchToProps)(App);


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocuments(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />

          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignIn />)} />
        </Switch>
      </div>
    );
  }

}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);