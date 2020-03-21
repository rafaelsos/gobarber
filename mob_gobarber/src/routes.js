import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Routes() {
  const signed = useSelector(state => state.auth.signed);

  return (
    <NavigationContainer>
      {signed ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            // eslint-disable-next-line react/prop-types
            tabBarIcon: ({ focused, color }) => {
              let iconName;

              if (route.name === 'Agendamentos') {
                iconName = focused ? 'event' : 'event';
              } else if (route.name === 'Meu Perfil') {
                iconName = focused ? 'person' : 'person';
              }
              // You can return any component that you like here!
              return <Icon name={iconName} size={20} color={color} />;
            },
          })}
          tabBarOptions={{
            keyboardHidesTabBar: true,
            inactiveTintColor: 'rgba(255,255,255,0.6)',
            activeTintColor: '#fff',
            style: {
              backgroundColor: '#8d41a8',
            },
          }}
          headerMode="none">
          <Tab.Screen name="Agendamentos" component={Dashboard} />
          <Tab.Screen name="Meu Perfil" component={Profile} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Routes;

/**
 * routes.js do colega
 * import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { setNavigator } from './src/services/navigation';

import Signin from './src/pages/Signin';
import SignUp from './src/pages/SignUp';
import Agendamentos from './src/pages/Dashboard';
import Profile from './src/pages/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  const signed = useSelector(state => state.auth.signed);
  return (
    <NavigationContainer ref={setNavigator}>
      {signed ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            // eslint-disable-next-line react/prop-types
            tabBarIcon: ({ focused, color }) => {
              let iconName;

              if (route.name === 'Agendamentos') {
                iconName = focused ? 'event' : 'event';
              } else if (route.name === 'Meu perfil') {
                iconName = focused ? 'person' : 'person';
              }
              // You can return any component that you like here!
              return <Icon name={iconName} size={20} color={color} />;
            },
          })}
          tabBarOptions={{
            keyboardHidesTabBar: true,
            inactiveTintColor: 'rgba(255,255,255,0.6)',
            activeTintColor: '#fff',
            style: {
              backgroundColor: '#8d41a8',
            },
          }}
          headerMode="none"
        >
          <>
            <Tab.Screen name="Agendamentos" component={Agendamentos} />
            <Tab.Screen name="Meu perfil" component={Profile} />
          </>
        </Tab.Navigator>
      ) : (
        <Stack.Navigator headerMode="none">
          <>
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
 */
