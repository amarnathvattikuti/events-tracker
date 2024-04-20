import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Button,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { DELETE_EVENT } from "../mutations/mutatiom";
import { useMutation } from "@apollo/client";
import { GET_ALL_EVENTS } from "../gplqueries/gplQueries";

export default function ListView({ item, isEnabled, route, navigation }: any) {
  const [open, setOpen] = useState(false);
  // const [delSuccess, setDelSuccess] = useState(null);
  // const [deleteErr, setDeleteErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const showMenu = () => {
    setOpen(true);
  };
  const [deleteEvent, error] = useMutation(DELETE_EVENT, {
    variables: { id: item.id },
    onCompleted: (data) => {
      console.log(data); // the response
      Alert.alert("Event Deleted Successfull");
    },
    onError: (error) => {
      console.log(error); // the error if that is the case
      Alert.alert("Some thing went wrong");
    },
    refetchQueries: [{ query: GET_ALL_EVENTS }],
  });

  const getDetails = ({ data }: any) => {
    if (data) {
      navigation.navigate("Details", { data: data });
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        getDetails({ data: item });
      }}
      style={!isEnabled ? styles.ListItem : styles.ListItemThumb}
    >
      <View style={styles.listView}>
        <Text style={styles.textHead}>{item.name}</Text>
        <Text>Entry: {item.entry}</Text>
        <Text>Date: {item.date}</Text>
      </View>
      <View style={styles.iconSpace}>
        <Entypo
          name="dots-three-vertical"
          size={24}
          color="black"
          onPress={showMenu}
        />
      </View>
      {open ? (
        <View style={styles.deletebtn}>
          <Text
            style={styles.delText}
            onPress={() => {
              deleteEvent();
            }}
          >
            <AntDesign name="delete" size={16} color="white" /> Delete
          </Text>
        </View>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ListItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderColor: "#eee",
    flexDirection: "column",
    borderBottomWidth: 1,
    width: "100%",
  },
  ListItemThumb: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderColor: "#eee",
    borderBottomWidth: 1,
  },
  listView: {
    width: "auto",
    height: "auto",
  },
  textHead: {
    fontWeight: "600",
  },
  iconSpace: {
    width: 20,
    top: 30,
    position: "absolute",
    right: 10,
  },
  deletebtn: {
    position: "absolute",
    width: 85,
    padding: 10,
    right: 25,
    top: 25,
    backgroundColor: "darkslateblue",
    borderRadius: 5,
  },
  delText: {
    color: "#fff",
  },
});
