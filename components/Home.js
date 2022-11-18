import { StyleSheet, Text, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <>
      <View>
        <Text onPress={() => navigation.navigate("Favourite")}></Text>
        <Text onPress={() => navigation.navigate("Cart")}> </Text>
        <Text onPress={() => navigation.navigate("Profile")}> </Text>
      </View>
    </>
  );
}

 