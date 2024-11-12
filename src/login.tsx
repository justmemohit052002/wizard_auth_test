import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateLogin = () => {
    if (!email || !password) {
      setErrorMessage("Please enter both email and password");
    } else if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters");
    } else {
      setErrorMessage("");
      Alert.alert("Login Successful", `Welcome ${email}!`);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("./image/bgm.png")}
        style={[styles.header, { height: width * 0.6 }]}
      >
        <Text style={styles.headerText}>Login in your account</Text>
      </ImageBackground>

      <View>
        <View style={styles.inputcontainer}>
          <Text style={styles.textInput}>Email</Text>
          <TextInput
            placeholder=""
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>
        <View style={styles.inputcontainer}>
          <Text style={styles.textInput}>Password</Text>
          <TextInput
            placeholder=""
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
        </View>

        {errorMessage ? (
          <Text style={styles.error}> {errorMessage}</Text>
        ) : null}

        <TouchableOpacity
          onPress={validateLogin}
          style={styles.buttoncontainer}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
            <FontAwesome
              name="arrow-right"
              size={20}
              color="white"
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.displaysignup}>
        <Text>if you don't have an account </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
          <Text style={styles.presssignup}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    textAlign: "left",
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 0,
    marginRight: 120,
  },
  input: {
    height: 50,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    borderBlockColor: "gray",
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  textInput: {
    paddingBottom: -1,
    marginLeft: 5,
  },
  inputcontainer: {
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
  },
  displaysignup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  presssignup: {
    color: "blue",
  },
  error: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "rgb(31, 75, 137)",
    width: "85%",
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginRight: 25,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 18,
  },
  buttoncontainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginLeft: 10,
  },
});

export default LoginScreen;
