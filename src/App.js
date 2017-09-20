import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers'

class App extends Component {
  componentWillMount(){
    const config = {
      apiKey: 'AIzaSyCNZ9tVmO_PJPlJ8TS0qhUIguEvn2ZoQTc',
      authDomain: 'manager-e28e2.firebaseapp.com',
      databaseURL: 'https://manager-e28e2.firebaseio.com',
      projectId: 'manager-e28e2',
      storageBucket: '',
      messagingSenderId: '1000730731961'
    }
    firebase.initializeApp(config)
  }
  render(){
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello
          </Text>
        </View>
      </Provider>
    )
  }
}

export default App;
