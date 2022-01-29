import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    logoContainer: {
        margin: 15,
    },
    logo: {
        width: 100,
        height: 100, 
        resizeMode: "contain"
    },
    navOptionsTitle: {
        fontSize: 15,
        fontWeight: "500"
    },
    navOptionsImgContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    navOptionsImg: {
        width: 100,
        height: 100,
        resizeMode: "contain",
        marginBottom: 10
    },
    navOptionsIcon: {
        backgroundColor: "black",
        marginTop: 8,
        padding: 5,
        borderRadius: 17
    },
    navOptionsContainer: reduceOpacity => ({
        backgroundColor: "#F5F5F5",
        margin: 5,
        paddingHorizontal: 15,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: reduceOpacity ? 0.4 : 1
    }),
    navFavContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
    },
    navFavIcon: {
        marginRight: 10,
        backgroundColor: "#C0C0C0",
        padding: 5,
        borderRadius: 18
    },
    navFavTitle: {
        fontSize: 16,
        fontWeight: "600"
    },
    navFavSubtitle: {
        fontSize: 14,
        fontWeight: "300"
    },
    navFavSeparator: {
        backgroundColor: "lightgray",
        height: 0.4,
        width: "100%"
    }
})
