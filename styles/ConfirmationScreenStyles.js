import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  animation: {
    flex: 1,
    height: 300,
    alignSelf: "center",
    marginHorizontal: 25,
    // backgroundColor: "black",
  },
  messageContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 25,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 25,
  },
  title: (showBlackText) => ({
    fontSize: showBlackText ? 21 : 18,
    fontWeight: "500",
    color: showBlackText ? "black" : "white",
  }),
  subtitle: {
    fontSize: 18,
    fontWeight: "300",
    marginTop: 20,
    marginHorizontal: 15,
  },
  highlightText: {
    fontWeight: "500",
  },
  ctaBtn: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    width: "85%",
  },
});
