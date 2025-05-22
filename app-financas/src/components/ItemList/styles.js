import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F0F3FF",

        width: "100%",
        height: 90,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 15,
        borderRadius: 8,
    },

    tag: {
        flexDirection: "row",
        height: 25,
        width: 90,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        marginBottom: 5
    },

    label: {
        fontSize: 14,
        color: "#FFFFFF"
    },
    
    value: {
        fontSize: 25,

    }
})