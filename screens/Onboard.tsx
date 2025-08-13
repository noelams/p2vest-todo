import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Colors from "../configs/colors";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { AuthStackParamList } from "../navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

type Slide = {
  key: number;
  title?: string;
  text: string;
  image?: any;
  backgroundColor?: string;
};

type Props = NativeStackScreenProps<AuthStackParamList, "Onboard">;

// interface OnboardingProps {
//   navigation?: any;
// }

const slides: Slide[] = [
  {
    key: 1,
    title: "Todyapp",
    text: "The best to do list application for you",
    image: require("../assets/todyapp_logo.png"),
    backgroundColor: Colors.primary,
  },
  {
    key: 2,
    title: "Your convenience in\n making a todo list",
    text: "Here's a mobile platform that helps you create task\n or to list so that it can help you in every job\n easier and faster",
    image: require("../assets/onboarding2.png"),
  },
  {
    key: 3,
    title: "Find the practicality in\n making your todo list",
    text: "Easy-to-understand user interface  that makes you\n more comfortable when you want to create a task or\n to do list, Todyapp can also improve productivity",
    image: require("../assets/onboarding3.png"),
  },
];

const OnboardingScreen: React.FC<Props> = ({ navigation }) => {
  const renderItem = ({ item }: { item: Slide }) => (
    <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
      <Image
        source={item.image}
        style={item.key === 1 ? styles.firstImage : styles.image}
      />
      <Text style={item.key === 1 ? styles.firstTitle : styles.title}>
        {item.title}
      </Text>
      <Text style={item.key === 1 ? styles.firstText : styles.text}>
        {item.text}
      </Text>
    </View>
  );

  const onDone = () => {
    console.log("Onboarding finished");
    navigation.navigate("Welcome");
  };

  const renderDoneButton = () => (
    <CustomButton title="Continue" onPress={onDone} />
  );

  return (
    <View style={styles.container}>
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        onDone={onDone}
        renderDoneButton={renderDoneButton}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slide: { flex: 1, justifyContent: "center", alignItems: "center" },
  firstImage: {
    width: 200,
    height: 200,
  },
  firstTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: -25,
    marginBottom: 10,
  },
  firstText: {
    color: "#ffffff",
  },
  image: { width: 300, height: 300 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 20,
    color: Colors.gray,
  },
  nextBox: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
