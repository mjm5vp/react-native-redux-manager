import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import RouterComp from './Router';
// import LoginForm from './components/LoginForm';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCNZ9tVmO_PJPlJ8TS0qhUIguEvn2ZoQTc',
      authDomain: 'manager-e28e2.firebaseapp.com',
      databaseURL: 'https://manager-e28e2.firebaseio.com',
      projectId: 'manager-e28e2',
      storageBucket: '',
      messagingSenderId: '1000730731961'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <RouterComp />
      </Provider>
    );
  }
}

export default App;
