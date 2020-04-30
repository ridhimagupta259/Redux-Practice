import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import animation from './src/components/animation';
import Listing from './src/components/listing';
import Login from './src/components/login';
import Search from './src/components/search';
import Concept from './src/components/concept';
import Details from './src/components/details';
import Splash from './src/components/splash';

import * as React from 'react';
import {Provider} from 'react-redux';
import store from './src/services/rootreducer';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Concept"
        component={Concept}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Listing"
        component={Listing}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{header: () => null}}
      />
      <Stack.Screen name="animation" component={animation} />
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
