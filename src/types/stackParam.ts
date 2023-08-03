import { NavigationProp } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type stackParams = {
 Home: undefined,
 Welcome: undefined, 
}

export type HomeParam = NativeStackScreenProps<stackParams, "Home">

export type WelcomeParam = NativeStackScreenProps<stackParams, "Welcome">