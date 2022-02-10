import React from "react";
import { View } from "react-native";
import { loaderStyleSheet } from "../styles/Loader";
import LottieView from "lottie-react-native";

export default function Loader() {
  return (
    <View style={loaderStyleSheet.container}>
      <LottieView
        source={require("../json/loading.json")}
        autoPlay
        speed={1}
        loop
      />
    </View>
  );
}
