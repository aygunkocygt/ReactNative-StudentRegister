import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class Main extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyDRXKs7xVEx-0yd5wgyCQgBPp7KUn7sFm4',
    authDomain: 'ogrencikayit-1408e.firebaseapp.com',
    databaseURL: 'https://ogrencikayit-1408e.firebaseio.com',
    projectId: 'ogrencikayit-1408e',
    storageBucket: 'ogrencikayit-1408e.appspot.com',
    messagingSenderId: '949888447388'
  });
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default Main;
