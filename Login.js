import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { View, Text, Button } from "react-native";



export default function Login(props) {
  const [text, onChangeText] = React.useState("Phone Number");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View>
      <Text style={styles.login}>Log in to continue</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button
        style={styles.input}
        title="Generate Password"
        onPress={() => props.setUserLoggedIn(true)} //change this line to send the OTP based on the phone number
      ></Button>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="One-Time Password"
        keyboardType="numeric"
      />
      <Button
        style={styles.input}
        title="Log In"
        onPress={() => props.setUserLoggedIn(true)}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "green",
    height: "18%",
    alignItems: "flex-end",
    paddingTop: 50,
    paddingLeft: 95,
    paddingRight: 10,
    fontSize: 30,
  },
  input: {
    //flexDirection: "column",
    backgroundColor: "red",
    height: "15%",
    fontSize: 23,
  },
});
