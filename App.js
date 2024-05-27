import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/Ionicons'; // Importing icons from react-native-vector-icons
import StartScreen from "./StartScreen";
import HomeScreen from "./HomeScreen";
import Balls from "./Balls";
import DescriptionScreen from "./Description";
import CircularBigCardItems from "./CircularBigCardItems";
import Footwear from "./Footwear";
import CartScreen from "./CartScreen";
import KitScreen from "./KitScreen";
import { CartProvider } from './CartContext';
import InformationPage from "./InformationPage";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Home Stack Navigator
const HomeStackNavigator = () => (
  <Stack.Navigator initialRouteName="Start">
    <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Desc" component={DescriptionScreen} options={{
      title: "Description",
      headerStyle: { backgroundColor: "black" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" },
    }} />
    <Stack.Screen name="CBCI" component={CircularBigCardItems} options={{
      title: "Bats",
      headerStyle: { backgroundColor: "black" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" },
    }} />
    <Stack.Screen name="ball" component={Balls} options={{
      title: "Balls",
      headerStyle: { backgroundColor: "black" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" },
    }} />
    <Stack.Screen name="Info" component={InformationPage} options={{
      title: "About",
      headerStyle: { backgroundColor: "black" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" },
    }} />
    <Stack.Screen name="Login" component={LoginScreen} options={{
      title: "Login",
      headerStyle: { backgroundColor: "black" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" },
    }} />
    <Stack.Screen name="SignUp" component={SignUpScreen} options={{
      title: "SignUp",
      headerStyle: { backgroundColor: "black" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" },
    }} />
    <Stack.Screen name="FOOT" component={Footwear} options={{
      title: "Footwear",
      headerStyle: { backgroundColor: "black" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" },
    }} />
    <Stack.Screen name="Kit" component={KitScreen} options={{
      title: "Kits",
      headerStyle: { backgroundColor: "black" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" },
    }} />
    <Stack.Screen name="Cart" component={CartScreen} options={{
      title: "Your Cart",
      headerStyle: { backgroundColor: "black" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" },
    }} />
  </Stack.Navigator>
);

// Cart Stack Navigator
const CartStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Cart" component={CartScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="HomeTab"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'HomeTab') {
                iconName = 'home-outline';
              } else if (route.name === 'CartTab') {
                iconName = 'cart-outline';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: { backgroundColor: 'black' }, // Set the tab bar background color to black
          })}
        >
          <Tab.Screen name="HomeTab" component={HomeStackNavigator} options={{ headerShown: false }} />
          <Tab.Screen name="CartTab" component={CartStackNavigator} options={{ headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
