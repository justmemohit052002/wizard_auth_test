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

const { width } = Dimensions.get("window");

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateSignup = () => {
    if (!username || !email || !password || !reEnterPassword) {
      setErrorMessage("Please fill in all fields.");
    } else if (password !== reEnterPassword) {
      setErrorMessage("Passwords do not match.");
    } else if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
    } else {
      setErrorMessage("");
      Alert.alert("Signup Successful", `Welcome ${username}!`);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("./image/bgm.png")}
        style={[styles.header, { height: width * 0.6 }]}
      >
        <Text style={styles.headerText}>Sign up & Create </Text>
        <Text style={styles.headerText}>an Account</Text>
      </ImageBackground>

      <View style={styles.inputContainer}>
        <Text style={styles.textInput}>Username</Text>
        <TextInput
          placeholder=" "
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.textInput}>Email</Text>
        <TextInput
          placeholder=" "
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.textInput}>Password</Text>
        <TextInput
          placeholder=" "
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.textInput}>Re-enter Password</Text>
        <TextInput
          placeholder=" "
          value={reEnterPassword}
          onChangeText={setReEnterPassword}
          style={styles.input}
          secureTextEntry
        />
      </View>

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <TouchableOpacity onPress={validateSignup}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.displayLogin}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.pressLogin}>Login</Text>
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
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    marginRight: 150,
  },
  button: {
    backgroundColor: "rgb(31, 75, 137)",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
    width: "85%",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  displayLogin: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  pressLogin: {
    color: "blue",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
  inputContainer: {
    marginBottom: 0,
  },
  textInput: {
    fontSize: 16,
    color: "#333",
    marginBottom: 0,
    marginLeft: 30,
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: "85%",
    alignSelf: "center",
    marginTop: 0,
  },
});

export default SignupScreen;
