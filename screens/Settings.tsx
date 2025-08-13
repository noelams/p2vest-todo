import {
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Text,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons.js";
import SettingsOption from "../components/SettingsOption";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../navigation/types";
import Colors from "../configs/colors";
import { AuthContext } from "../context/AuthContext";
import ProfilePic from "../components/ProfilePic";

type Props = NativeStackScreenProps<AuthStackParamList, "Settings">;

type UserProfile = {
  firstName: string;
  lastName: string;
  email: string;
  image: string;
};

const Settings: React.FC<Props> = ({ navigation }) => {
  const { logout, user } = useContext(AuthContext);
  // const [user, setUser] = useState<UserProfile | null>(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("User:", user);

    // const fetchUser = async () => {
    //   if (!userId) return;
    //   try {
    //     const res = await fetch(`https://dummyjson.com/users/${userId}`, {
    //       headers: { Authorization: `Bearer ${userToken}` },
    //     });
    //     const data = await res.json();
    //     setUser(data);
    //   } catch (error) {
    //     console.error("Error fetching user:", error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerSection}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={30} color={"black"} />
        </TouchableOpacity>
        <CustomHeader title="Settings" />
        <TouchableOpacity>
          <MaterialCommunityIcons name="magnify" size={30} color={"black"} />
        </TouchableOpacity>
      </View>

      <ProfilePic
        image={user?.image}
        displayName={`${user?.firstName} ${user?.lastName}`}
        username={user?.username}
      />

      <SettingsOption
        icon={
          <MaterialCommunityIcons name="head" size={20} color={"#767E8C"} />
        }
        title="Account"
      />
      <SettingsOption
        icon={<MaterialCommunityIcons name="pen" size={20} color={"#767E8C"} />}
        title="Theme"
      />
      <SettingsOption
        icon={
          <MaterialCommunityIcons name="label" size={20} color={"#767E8C"} />
        }
        title="App Icon"
      />
      <SettingsOption
        icon={
          <MaterialCommunityIcons name="dumbbell" size={20} color={"#767E8C"} />
        }
        title="Productivity"
      />
      <SettingsOption
        icon={
          <MaterialCommunityIcons name="star" size={20} color={"#767E8C"} />
        }
        title="Change Mode"
        buttonType="toggle"
      />

      <View style={styles.divider}></View>

      <SettingsOption
        icon={<MaterialCommunityIcons name="key" size={20} color={"#767E8C"} />}
        title="Privacy Policy"
      />
      <SettingsOption
        icon={
          <MaterialCommunityIcons name="help-box" size={20} color={"#767E8C"} />
        }
        title="Help Center"
      />
      <SettingsOption
        icon={
          <MaterialCommunityIcons name="power" size={20} color={"#767E8C"} />
        }
        title="Log Out"
        onPress={logout}
      />
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerSection: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 20,
    alignItems: "center",
  },
  divider: {
    borderTopWidth: 1,
    borderColor: Colors.gray,
  },
});
