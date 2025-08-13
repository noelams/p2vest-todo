import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";
import Colors from "../configs/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<AuthStackParamList, "Welcome">;

const Welcome: React.FC<Props> = ({ navigation }) => {
  const handlePress = () => {
    console.log("Pressed");
    navigation.navigate("Login");
  };

  const handleGoogle = () => {
    console.log("Google login");
  };

  const handleFacebook = () => {
    console.log("Facebook login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 24, marginVertical: 20, fontWeight: "bold" }}>
        Welcome to <Text style={{ color: Colors.primary }}>Todyapp</Text>
      </Text>
      <Image
        source={require("../assets/onboarding4.png")}
        style={styles.welcomeImage}
      />
      <CustomButton
        title="Continue with email"
        onPress={handlePress}
        customStyles={styles.continueButton}
        customTextStyles={styles.continueButtonText}
        icon={<Ionicons name="mail" size={16} color="#fff" />}
      />

      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine}></View>
        <Text style={styles.dividerText}>or continue with</Text>
        <View style={styles.dividerLine}></View>
      </View>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton} onPress={handleFacebook}>
          <FontAwesome name="facebook" size={20} color="#1877F2" />
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton} onPress={handleGoogle}>
          <AntDesign name="google" size={20} color="#DB4437" />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  welcomeImage: {
    width: 350,
    height: 500,
  },
  continueButton: {
    width: "80%",
    padding: 15,
  },
  continueButtonText: {
    fontWeight: "400",
  },
  dividerContainer: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.gray,
  },
  dividerText: {
    color: Colors.gray,
    fontSize: 12,
    marginHorizontal: 10,
  },
  socialButtonsContainer: {
    flexDirection: "row",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: "#F3F5F9",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
  socialButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
