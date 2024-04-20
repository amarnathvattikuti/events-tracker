// @ts-nocheck
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import WelcomScreen from "./screens/welcomScreen";
import HomeView from "./screens/HomeScreen";
import EventDetails from "./screens/EventDetails";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//const RootStack = createNativeStackNavigator<RootStackParamList>();

//cahe update
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        events: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

// Initialize Apollo Client
const client = new ApolloClient({
  uri:
    Platform.OS === "ios"
      ? "http://localhost:4000/graphql"
      : "http://192.168.0.103:4000/graphql",
  cache,
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomScreen">
          <Stack.Screen
            name="WelcomScreen"
            component={WelcomScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Home" component={HomeView} />
          <Stack.Screen name="Details" component={EventDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
