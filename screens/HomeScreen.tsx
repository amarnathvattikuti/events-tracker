import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Switch,
  ActivityIndicator,
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import Header from "../componants/header";
import allEvents from "../componants/data";
import ListView from "../componants/ListView";
import { Entypo } from "@expo/vector-icons";
import { gql, useQuery } from "@apollo/client";
import { GET_ALL_EVENTS } from "../gplqueries/gplQueries";
import Model from "../componants/model";
import Spinner from "../componants/spinner";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  WelcomScreen: undefined;
  Home: { user: string };
  Details: { sort: "latest" | "top" } | undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeView({ route, navigation }: Props) {
  const { user } = route.params;
  const { loading, error, data } = useQuery(GET_ALL_EVENTS);
  const [allEvents, setAllEvents] = useState<any>([]);
  const [isEnabled, setIsEnabled] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  if (data) {
    console.log(data.events);
    //setAllEvents(data.events);
  } else if (loading) {
    return <Text>Loading</Text>;
  } else if (error) {
    console.log(error);
    return <Text>Some thing went wrong</Text>;
  } else {
    return () => {};
  }
  return (
    <SafeAreaView>
      <View style={styles.rowView}>
        <Header title={"Events Tracker"} />
      </View>
      <View style={styles.user}>
        <Text>
          Welcome {user && JSON.stringify(user)} below are available events
        </Text>
      </View>
      {/* <View style={styles.switchContainer}>
        <Text style={styles.tag}>Change list mode</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View> */}
      <View style={styles.listContainer}>
        <FlatList
          data={data.events}
          renderItem={({ item }) => (
            <ListView
              item={item}
              isEnabled={isEnabled}
              route={route}
              navigation={navigation}
            />
          )}
        />
      </View>
      {/* <View style={styles.cards}></View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    top: 30,
  },
  rowView: {
    width: "100%",
  },
  switchContainer: {
    width: "100%",
    padding: 15,
  },
  listContainer: {
    height: "auto",
    top: -30,
    marginBottom: 250,
    padding: 15,
  },
  cards: {
    width: "100%",
  },

  tag: {
    fontSize: 14,
    textAlign: "left",
  },
  switch: {
    height: 15,
    top: -15,
    right: 0,
  },
  user: {
    width: "100%",
    padding: 15,
    marginBottom: 20,
  },
});
