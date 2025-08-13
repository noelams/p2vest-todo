import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../configs/colors";

interface CustomHeaderProps {
  title: string;
  subHeading?: string;
  customHeaderStyles?: object;
  customTitleStyles?: object;
  customSubHeadingStyles?: object;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  subHeading,
  customHeaderStyles,
  customSubHeadingStyles,
  customTitleStyles,
}) => {
  return (
    <View style={[styles.container, customHeaderStyles]}>
      <Text style={[styles.title, customTitleStyles]}>{title}</Text>
      <Text style={[styles.subHeading, customSubHeadingStyles]}>
        {subHeading}
      </Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subHeading: {
    color: Colors.gray,
  },
});
