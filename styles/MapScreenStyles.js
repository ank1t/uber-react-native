import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  mapContainer: {
    flex: 3,
    backgroundColor: "black",
  },
  map: {
    flex: 1,
  },
  nonMapViewContainer: {
    flex: 2,
    backgroundColor: "white",
  },
  inputContainer: {
    borderTopColor: "#D3D3D3",
    borderTopWidth: 0.5,
    flexDirection: "row",
  },
  navigateCard: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  navigateCardGreeting: {
    marginVertical: 15,
    fontSize: 17,
    fontWeight: "600",
  },
  rideOptions: {
    flex: 1,
    backgroundColor: "white",
  },
  navFavContainer: {
    flexDirection: "row",
    flex: 1,
  },
  bottomContainer: {
    backgroundColor: "white",
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "100%",
    marginBottom: 35,
  },
  ridesContainer: {
    backgroundColor: "black",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 18,
  },
  eatsContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 18,
  },
  ridesText: {
    fontSize: 14,
    color: "white",
    marginLeft: 10,
  },
  eatsText: {
    fontSize: 14,
    color: "black",
    marginLeft: 10,
  },
  menuBtn: {
    backgroundColor: "white",
    borderRadius: 18,
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    padding: 4,
  },
  rideOptionsTitleContainer: {
    flexDirection: "row",
    marginTop: 18,
    justifyContent: "space-between",
    marginHorizontal: 8,
    marginBottom: 10,
  },
  rideOptionsTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  rideOptionsBackIconBalancer: {
    opacity: 0,
  },
  rideOptionsListContainer: {},
  rideOptionsItemContainer: (isSelected) => ({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: isSelected ? "lightgray" : "white",
  }),
  rideOptionsListImage: {
    marginLeft: 35,
    width: 75,
    height: 75,
    resizeMode: "contain",
  },
  rideOptionsListTitle: {
    fontSize: 17,
    fontWeight: "500",
    marginLeft: -6,
  },
  rideOptionsListSubtitle: {
    marginLeft: -6,
  },
  rideOptionsListPrice: {
    fontSize: 17,
    fontWeight: "500",
    marginRight: 35,
  },
  rideOptionsCTABtn: (showDisabledState) => ({
    backgroundColor: showDisabledState ? "lightgray" : "black",
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
    marginHorizontal: 25,
    marginTop: 10,
  }),
  rideOptionsCTAText: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "500",
  },
});

export const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 1,
  },
  textInput: {
    backgroundColor: "#EFEFEF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
