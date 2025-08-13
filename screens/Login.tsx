import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomHeader from "../components/CustomHeader";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<AuthStackParamList, "Login">;

const Login: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<string>("");

  const handleNext = () => {
    console.log("Pressed");
    navigation.navigate("SignUp", { email: email });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <CustomHeader
          title="Welcome Back!"
          subHeading="Your work faster and structured with Todyapp"
        />
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email Address</Text>
          <CustomInput
            placeholder="name@example.com"
            onChangeText={(text) => setEmail(text)}
            value={email}
            customInputContainerStyle={styles.inputField}
          />
        </View>
      </View>
      <CustomButton
        title="Next"
        onPress={handleNext}
        customStyles={styles.nextButton}
      />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  inputContainer: {
    marginVertical: 20,
  },
  inputLabel: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputField: {
    backgroundColor: "#F6F7F9",
  },
  nextButton: {
    marginBottom: 20,
    padding: 15,
    width: "100%",
  },
});
