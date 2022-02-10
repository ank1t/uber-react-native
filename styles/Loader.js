import React from "react";
import { StyleSheet } from "react-native";

export const loaderStyleSheet = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    zIndex: 1000,
  },
});
