import { StyleSheet, Text, View, Image } from "react-native";

export default function Header({ title }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Image style={styles.logo} source={require("../assets/tracker.png")} />
        {title}
      </Text>
    </View>
  );
}

Header.defaultProps = {
  title: "events tacker",
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    padding: 15,
    backgroundColor: "darkslateblue",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  logo: {
    width: 22,
    height: 22,
  },
});
