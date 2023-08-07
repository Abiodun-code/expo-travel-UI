import { NavigationProp } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type stackParams = {
 Home: undefined,
 Welcome: undefined,
  Destination: {destinationProp: any}
}

export type HomeParam = NativeStackScreenProps<stackParams, "Home">

export type WelcomeParam = NativeStackScreenProps<stackParams, "Welcome">

export type DestinationParam = NativeStackScreenProps<stackParams, "Destination">