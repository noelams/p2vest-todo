import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type UserProfile = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  username: string;
};

type AuthContextType = {
  isLoggedIn: boolean;
  login: (token: string, user: UserProfile) => Promise<void>;
  logout: () => Promise<void>;
  user: UserProfile | null;
  userToken: string | null;
};

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: async () => {},
  logout: async () => {},
  user: null,
  userToken: null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userToken, setUserToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    const loadAuthData = async () => {
      try {
        const token = await AsyncStorage.getItem("accessToken");
        const storedUser = await AsyncStorage.getItem("user");
        if (token && storedUser) {
          setUserToken(token);
          setUser(JSON.parse(storedUser));
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error("Error loading auth data:", error);
      }
    };
    loadAuthData();
  }, []);

  const login = async (token: string, userData: UserProfile) => {
    try {
      await AsyncStorage.setItem("accessToken", token);
      await AsyncStorage.setItem("user", JSON.stringify(userData));
      setUserToken(token);
      setUser(userData);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error saving auth data:", error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.multiRemove(["accessToken", "user"]);
      setUserToken(null);
      setUser(null);
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error removing auth data:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, user, userToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
