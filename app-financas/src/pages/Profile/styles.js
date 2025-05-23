import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F0F4FF"
    },

    sectionProfile: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 15,
    },

    title: {
        fontSize: 36,
        fontWeight: 900,
    },
    name: {
        width: "90%",
        fontSize: 20,
        marginVertical: 15,
        textAlign: "center"
    },

    register: {
        backgroundColor: "#3B3DBF",
        height: 60,
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 30
    },

    registerText: {
        fontSize: 18,
        color: "#FFFFFF"
    },

    signOut: {
        height: 60,
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 20,
        borderWidth: 1.5,
        borderColor: "red"
    },

    signUotText: {
        fontSize: 18,
        color: "red"
    }

})