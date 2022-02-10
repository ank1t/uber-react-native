import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { styles } from "../styles/MapScreenStyles";
import Map from "../components/Map";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../components/NavigateCard";
import RideOptions from "../components/RideOptions";
import { Icon } from "react-native-elements";
import { selectStartCheckout } from "../slices/navSlice";
import { useSelector } from "react-redux";
import Loader from "./Loader";

export default function MapScreen() {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  const stackOptions = {
    headerShown: false,
  };
  const startCheckout = useSelector(selectStartCheckout);
  const [loading, setLoading] = useState(startCheckout);

  useEffect(() => {
    if (!startCheckout) return;
    setLoading(startCheckout);
    const timer = setTimeout(() => {
      setLoading(false);
      navigation.navigate("ConfirmationScreen");
    }, 2500);
    return () => clearTimeout(timer);
  }, [startCheckout]);

  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity
        style={styles.menuBtn}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Icon name="menu" />
      </TouchableOpacity>
      <View style={styles.mapContainer}>
        <Map />
      </View>
      <View style={styles.nonMapViewContainer}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={stackOptions}
          />
          <Stack.Screen
            name="RideOptions"
            component={RideOptions}
            options={stackOptions}
          />
        </Stack.Navigator>
      </View>
      {loading && <Loader />}
    </View>
  );
}
