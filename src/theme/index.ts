import { Platform, StyleSheet } from "react-native"

export const theme = {
    bg: (opacity: any) => `rgba(249, 115, 22, ${opacity})`,
    text: '#f97316'
}

export const android = Platform.OS === "android"

export const styles = StyleSheet.create({
    safeAndroid:{
        paddingTop: android ? 40 : 0
    }
})