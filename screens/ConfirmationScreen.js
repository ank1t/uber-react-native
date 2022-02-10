import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import AnimatedLottieView from "lottie-react-native";
import { styles } from "../styles/ConfirmationScreenStyles";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../slices/navSlice";

const ConfirmationScreen = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  return (
    <SafeAreaView style={styles.container}>
      <AnimatedLottieView
        source={require("../json/confirmation-animation.json")}
        autoPlay
        loop={false}
        style={styles.animation}
        resizeMode="cover"
      />
      <View style={styles.messageContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title(true)}>Ride Booked</Text>
          <Text style={styles.subtitle}>
            Your ride from{" "}
            <Text style={styles.highlightText}>
              {origin.description.split(",")[0]}
            </Text>{" "}
            to{" "}
            <Text style={styles.highlightText}>
              {destination.description.split(",")[0]}
            </Text>{" "}
            has been booked.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmationScreen;
