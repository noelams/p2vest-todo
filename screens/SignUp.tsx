import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import CustomHeader from "../components/CustomHeader";
import CustomInput from "../components/CustomInput";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../navigation/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/AuthContext";

type Props = NativeStackScreenProps<AuthStackParamList, "SignUp">;

interface signUpDataTypes {
  username: string;
  password: string;
  email: string;
}

const SignUp: React.FC<Props> = ({ route, navigation }) => {
  const { login } = useContext(AuthContext);
  const { email } = route.params;
  const [loading, setLoading] = useState<boolean>(false);
  const [signUpData, setSignUpData] = useState<signUpDataTypes>({
    username: "",
    password: "",
    email: email,
  });

  const handlePress = async () => {
    try {
      console.log("Sign Up Data:", signUpData);
      setLoading(true);
      const sendData = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signUpData),
        credentials: "include",
      });

      const response = await sendData.json();
      console.log("Response from Dummy Json:", response);
      if (response.accessToken) {
        await login(response.accessToken, response);
        console.log("Response:", response);
      }
    } catch (err) {
      Alert.alert("Error", `Error:${err}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{}}>
        <CustomHeader
          title="Create account"
          subHeading="Create your account and feet the benefits"
        />
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Username</Text>
          <CustomInput
            placeholder="Enter your username"
            onChangeText={(text) =>
              setSignUpData((prev) => ({ ...prev, username: text }))
            }
            value={signUpData.username}
            customInputContainerStyle={styles.inputField}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <CustomInput
            isPassword={true}
            placeholder="Enter your Password"
            onChangeText={(text) =>
              setSignUpData((prev) => ({ ...prev, password: text }))
            }
            value={signUpData.password}
            customInputContainerStyle={styles.inputField}
          />
        </View>
      </View>
      <CustomButton
        title={
          loading ? (
            <ActivityIndicator size={"small"} color={"#fff"} />
          ) : (
            "Sign Up"
          )
        }
        onPress={handlePress}
        customStyles={styles.signUpButton}
      />
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  inputContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  inputLabel: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputField: {
    backgroundColor: "#F6F7F9",
  },
  signUpButton: {
    marginBottom: 20,
    width: "80%",
    padding: 15,
  },
});
