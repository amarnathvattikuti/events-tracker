import React from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TextInput,
  Alert,
} from "react-native";

// function Root() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={Home} />
//       <Drawer.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="Settings" component={Settings} />
//     </Drawer.Navigator>
//   );
// }

export default function WelcomScreen({ navigation }: any) {
  const [user, onChangeText] = React.useState("");

  const startApp = (e: any) => {
    onChangeText(e.target.value);
    if (!user) {
      Alert.alert("Please enter your name");
    } else if (user) {
      navigation.navigate("Home", { user: user });
    } else {
      return () => {};
    }
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/bg.jpeg")}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Events Tracker</Text>
        <Text style={styles.WelcomeText}>Please Enter your name to start</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={user}
          placeholder="Please enter your name to start"
        />
      </View>
      <View>
        <Text style={styles.strat} onPress={startApp}>
          Start
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  strat: {
    height: 60,
    backgroundColor: "#fccf55",
    textAlign: "center",
    padding: 17,
  },
  logoContainer: {
    position: "absolute",
    top: 270,
    left: 25,
    alignItems: "center",
    padding: 30,
  },
  logo: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  WelcomeText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  input: {
    width: "99%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});
