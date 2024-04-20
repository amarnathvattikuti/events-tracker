import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { AntDesign } from "@expo/vector-icons";

export default function EventDetails({ route, navigation }: any) {
  const { data } = route.params;
  console.log(data);
  const trackLocation = () => {
    Alert.alert("Location tracking is in progress");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowView}>
        <Image
          style={styles.headerImage}
          source={require("../assets/event-detials-bg-2.jpg")}
        />
      </View>
      {data && (
        <View style={styles.details}>
          <Text style={styles.tag}>Event Details</Text>
          <Text style={styles.textHead}>{data.name}</Text>
          <Text>{data.description}</Text>
          <Text style={styles.mTop10}>Place: {data.place}s</Text>
          <Text>Entry: {data.entry}</Text>
          <Text>Date: {data.date}</Text>
          <TouchableOpacity style={styles.trackLoc} onPress={trackLocation}>
            <Text>
              <Image
                style={styles.logo}
                source={require("../assets/tracker.png")}
              />
              <Text style={styles.innerText}>Track Location</Text>
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {/* <View style={styles.backCont}>
        <Text style={styles.Back}>
          <AntDesign name="arrowleft" size={20} color="black" /> Back
        </Text>
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    top: 30,
  },
  headerImage: {
    width: "100%",
    height: 200,
  },
  rowView: {
    width: "100%",
    alignSelf: "flex-start",
  },
  details: {
    width: "100%",
    padding: 15,
  },
  mTop10: {
    marginTop: 10,
  },
  tag: {
    fontSize: 14,
    textAlign: "left",
    marginBottom: 5,
  },
  textHead: {
    fontWeight: "600",
  },
  logo: {
    width: 20,
    height: 20,
  },
  trackLoc: {
    marginTop: 20,
    width: 160,
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: "center",
    backgroundColor: "darkslateblue",
    borderRadius: 7,
  },
  innerText: {
    color: "#fff",
  },
  backCont: {
    width: "100%",
    padding: 15,
    position: "absolute",
    bottom: 40,
  },
  Back: {
    color: "darkslateblue",
    fontSize: 18,
    textAlign: "left",
  },
});
