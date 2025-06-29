import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import { db } from "../../firebaseConfig";
import Header from "../components/Header";
import RestaurantCard, { RestaurantCardProps } from "../components/RestaurantCard";
import SearchBar from "../components/SearchBar";
import { restaurants as mockRestaurants } from "../data/utils";

const Home = () => {
  const [restaurants, setRestaurants] = useState<RestaurantCardProps[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "restaurants"),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id as string, ...doc.data() }));
        console.log("Restaurants fetched:", data);
        setRestaurants(data as any);
      },
      (error) => {
        console.error("Error fetching restaurants:", error);
      }
    );
    return () => unsubscribe();
  }, []);
  // firestore functions
  const addRestaurants = async () => {
    try {
      for (const restaurant of mockRestaurants) {
        await addDoc(collection(db, "restaurants"), restaurant);
      }
      console.log("Restaurants added successfully");
    } catch (err) {
      console.log("Error adding restaurants:", err);
    }
  };
  const delete4AllRestaurants = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "restaurants"));
      const batchDeletes = querySnapshot.docs.map((docSnap) => deleteDoc(doc(db, "restaurants", docSnap.id)));
      await Promise.all(batchDeletes);
      console.log("All restaurants deleted successfully");
    } catch (err) {
      console.log("Error deleting restaurants:", err);
    }
  };
  const filteredRestaurants = restaurants.filter((restaurant: any) => {
    const query = searchQuery.toLowerCase();
    return restaurant.name.toLowerCase().includes(query) || restaurant.categories.toLowerCase().includes(query);
  });
  return (
    <SafeAreaView style={styles.container}>
      <Header label={"Local Bites"} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {filteredRestaurants.length === 0 ? (
        <Text>No restaurants found matching your search.</Text>
      ) : (
        <FlatList
          data={filteredRestaurants}
          renderItem={({ item }) => <RestaurantCard info={item as any} />}
          keyExtractor={(item: any) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", alignItems: "center", justifyContent: "center" },
});

export default Home;
