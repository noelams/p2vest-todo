import { View, TextInput, StyleSheet, KeyboardTypeOptions } from "react-native";
import React, { ReactNode } from "react";
import Colors from "../configs/colors";

interface CustomInputProps {
  placeholder: string;
  onChangeText: (params: string) => void;
  isPassword?: boolean;
  value: string;
  customInputContainerStyle?: object;
  customInputStyle?: object;
  keyboardType?: KeyboardTypeOptions;
  returnKeyLabel?: string;
  icon?: ReactNode;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  onChangeText,
  value,
  isPassword,
  customInputContainerStyle,
  customInputStyle,
  keyboardType,
  returnKeyLabel,
  icon,
}) => {
  return (
    <View style={[styles.container, customInputContainerStyle]}>
      {icon}
      <TextInput
        style={[styles.textInput, customInputStyle]}
        placeholder={placeholder}
        placeholderTextColor={Colors.gray}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        secureTextEntry={isPassword}
        returnKeyLabel={returnKeyLabel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: "#E0E5ED",
    padding: 10,
  },
  textInput: {
    paddingVertical: 10,
    fontSize: 14,
    fontFamily: "RalewayMedium",
    width: "100%",
  },
});

export default CustomInput;
