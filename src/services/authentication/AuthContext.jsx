import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => false,
  signup: async () => false,
  login: async () => false,
  verify: async () => false,
  logout: async () => false,
  forgotPassword: async () => false,
  resetPassword: async () => false,
  checkTokenValidity: async () => false,
});
