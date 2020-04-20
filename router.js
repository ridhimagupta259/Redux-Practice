import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/components/home';
import Listing from './src/components/listing';
import Login from './src/components/login';
// import Datalist from './src/components/datalist';

import * as React from 'react';
import {Provider} from 'react-redux';
import store from './src/services/rootreducer';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Listing" component={Listing} />
      {/* <Stack.Screen name="Datalist" component={Datalist} /> */}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
}
