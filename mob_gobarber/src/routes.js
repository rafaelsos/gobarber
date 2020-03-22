import 'react-native-gesture-handler';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import SelectProvider from '~/pages/New/SelectProvider';
import SelectDateTime from '~/pages/New/SelectDateTime';
import Confirm from '~/pages/New/Confirm';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const New = createStackNavigator();

function NewScreen() {
  return (
    <New.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#fff',
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      }}>
      <New.Screen
        name="SelectProvider"
        component={SelectProvider}
        options={({ navigation }) => ({
          title: 'Selecione o prestador',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Agendamentos');
              }}>
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />
      <New.Screen
        name="SelectDateTime"
        component={SelectDateTime}
        options={({ navigation }) => ({
          title: 'Selecione o horário',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />
      <New.Screen name="Confirm" component={Confirm} />
    </New.Navigator>
  );
}

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

              return <Icon name={iconName} size={35} color={color} />;
            },
          })}
          tabBarOptions={{
            keyboardHidesTabBar: true,
            inactiveTintColor: 'rgba(255,255,255,0.6)',
            activeTintColor: '#fff',
            tabStyle: {
              height: 50,
            },
            style: {
              height: 80,
              paddingTop: 10,
              borderTopWidth: 0,
              backgroundColor: '#8d41a8',
            },
          }}
          headerMode="none">
          <>
            <Tab.Screen name="Agendamentos" component={Dashboard} />
            <Tab.Screen
              name="NewScreen"
              component={NewScreen}
              options={{
                tabBarVisible: false,
                tabBarLabel: 'Agendar',
                tabBarIcon: () => (
                  <Icon
                    name="add-circle-outline"
                    color="rgba(255, 255, 255, 0.6)"
                    size={25}
                  />
                ),
              }}
            />
            <Tab.Screen name="Meu Perfil" component={Profile} />
          </>
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
