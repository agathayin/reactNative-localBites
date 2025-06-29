import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
interface RestaurantCardProps {
  info: {
    name: string;
    categories: string;
    image: any;
    id: number;
  };
}
const RestaurantCard: React.FC<RestaurantCardProps> = ({ info }) => {
  const rating = 4;
  const { name, categories, image, id } = info;
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.viewContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.category}>{categories}</Text>
          <View style={styles.ratingContainer}>
            {Array.from({ length: rating }).map((_, index) => (
              <FontAwesome key={index} name="star" size={16} color="gold" />
            ))}
          </View>
        </View>
        <FontAwesome name="dollar" size={24} color="white" />
      </View>
    </View>
  );
};

const width = Dimensions.get("window").width;
const radius = 20;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9829ac",
    width: width - 20,
    height: 200,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.3,
    elevation: 9,
    marginBottom: 10,
  },
  label: { fontSize: 24, fontWeight: 700, color: "#fff" },
  image: { width: width - 20, height: 130, borderTopLeftRadius: radius, borderTopRightRadius: radius },
  title: {
    fontWeight: 700,
    fontSize: 20,
    color: "#fff",
  },
  category: {
    fontSize: 14,
    fontWeight: 400,
    color: "#fff",
  },
  textContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  ratingContainer: { flexDirection: "row", marginTop: 2 },
  viewContainer: {},
});

export default RestaurantCard;
export type { RestaurantCardProps };
