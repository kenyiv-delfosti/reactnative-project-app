import React, { useEffect, useState } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../app/screens/HomeScreen';
import OnBoardingScreen from '../app/screens/OnBoardingScreen';
import CheckoutScreen from './screens/CheckoutScreen';

import "react-native-url-polyfill/auto";

import { Provider } from "react-redux"
import store from './context/store';
import ProductScreen from './screens/ProductScreen';
import { BottomTab } from './components';
import CartScreen from '../app/screens/CartScreen';

const Stack = createNativeStackNavigator();

const MyComponent = ({ setActiveScreen }) => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener("state", () => {
      const currentScreen = navigation.getCurrentRoute().name;
      setActiveScreen(currentScreen);
      console.log("Active Screen : ", currentScreen);
    });

    return unsubscribe;
  }, [navigation]);
};

const App = () => {
  const [activeScreen, setActiveScreen] = useState("")
  return (
    <NavigationContainer>
      <MyComponent setActiveScreen={setActiveScreen}/>
      <Provider store={store}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
      </Stack.Navigator>
      </Provider>
      {activeScreen !== "OnBoarding" && (
      <BottomTab activeScreen={activeScreen}/>
      )}
    </NavigationContainer>
  )
}

export default App
