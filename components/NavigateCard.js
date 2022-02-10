import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { styles, toInputBoxStyles } from "../styles/MapScreenStyles";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTravelTimeInformation,
  setDestination,
} from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavorites from "./NavFavorites";
import { Icon } from "react-native-elements";

export default function NavigateCard() {
  const getGreeting = () => {
    const hourOfDay = new Date().getHours();
    var message = "Good Morning, Ankit";
    switch (true) {
      case hourOfDay >= 12 && hourOfDay < 17:
        message = "Good Afternoon, Ankit";
        break;
      case hourOfDay >= 17 && hourOfDay <= 24:
        message = "Good Evening, Ankit";
        break;
    }
    return message;
  };
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const travelTimeInfo = useSelector(selectTravelTimeInformation);

  useEffect(() => {
    if (!travelTimeInfo) return;
    navigation.navigate("RideOptions");
  }, [travelTimeInfo]);

  return (
    <SafeAreaView style={styles.navigateCard} forceInset={{ bottom: "always" }}>
      <Text style={styles.navigateCardGreeting}> {getGreeting()}</Text>
      <View style={styles.inputContainer}>
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          styles={toInputBoxStyles}
          fetchDetails
          minLength={2}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              })
            );
          }}
        />
      </View>
      <View style={styles.navFavContainer}>
        <NavFavorites />
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.ridesContainer}
          onPress={() => navigation.navigate("RideOptions")}
        >
          <Icon name="car" type="font-awesome" color="white" size={18} />
          <Text style={styles.ridesText}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.eatsContainer}>
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={18}
          />
          <Text style={styles.eatsText}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
