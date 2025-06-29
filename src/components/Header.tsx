import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

interface HeaderProps {
  label: string;
}

const Header: React.FC<HeaderProps> = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};
const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: { backgroundColor: "#9829ac", width: width, height: 60, alignItems: "center", justifyContent: "center" },
  label: { fontSize: 24, fontWeight: 700, color: "#fff" },
});

export default Header;
