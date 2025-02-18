import { StyleSheet } from "react-native";
import Constants from "expo-constants";


const statusBarHeight = Constants.statusBarHeight;


export const defaultStylePages = StyleSheet.create({
    page: {
        flex: 1,
        paddingTop: statusBarHeight,
    }
});