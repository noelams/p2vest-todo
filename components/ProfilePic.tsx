import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import Colors from "../configs/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface ProfilePicProps {
  image?: string;
  onEdit?: () => void;
  displayName?: string;
  username?: string;
}

const ProfilePic: React.FC<ProfilePicProps> = ({
  image,
  onEdit,
  displayName,
  username,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.profilePicContainer}>
        <TouchableOpacity onPress={onEdit} style={styles.editButton}>
          <MaterialCommunityIcons
            name="pencil-outline"
            size={20}
            color={Colors.primary}
          />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: image
                ? image
                : "https://ui-avatars.com/api/?name=Noel+Inalegwu",
            }}
            style={styles.image}
          />
        </View>
      </View>
      <Text style={styles.displayName}>{displayName}</Text>
      <Text style={styles.username}>{username}</Text>
    </View>
  );
};

export default ProfilePic;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
  },
  profilePicContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: Colors.gray,
    alignSelf: "center",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    position: "absolute",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  editButton: {
    position: "relative",
    left: 60,
    backgroundColor: "#fff",
    height: 30,
    width: 30,
    borderRadius: 15,
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  },
  displayName: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#333",
  },
  username: {
    fontSize: 16,
    color: Colors.gray,
  },
});
