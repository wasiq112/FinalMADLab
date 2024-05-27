import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "./firebase";
import { useNavigation } from "@react-navigation/native";

const KitScreen = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    console.log("useEffect triggered");

    const db = getDatabase(app);
    const dbRef = ref(db, "CricketApp");

    console.log("Attempting to connect to database...");

    onValue(
      dbRef,
      (snapshot) => {
        console.log("onValue triggered");
        const data = snapshot.val();
        setData(data);
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );

    return () => {
      console.log("Cleaning up onValue listener");
      // Optional: Add cleanup code if needed
    };
  }, []);

  const items = [];
  const maxItemsToShow = 7;

  for (let index = 18; index < 32; index++) {
    // Increase loop until index 31 to cover both sections
    const item = data[index];
    if (item) {
      // Check if item is not undefined
      items.push(
        <TouchableOpacity
          key={index}
          style={styles.CardSet}
          onPress={() => navigation.navigate("Desc", { item })}
        >
          <Image source={{ uri: item.img }} style={styles.bigCardImage} />
          <Text style={styles.title}>{item.Title}</Text>
        </TouchableOpacity>
      );
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/AppStart.png")}
      >
        <ScrollView >
      
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("./assets/kit.png")}
              style={styles.category2image}
            />
            <Text
              style={{
                fontSize: 47,
                color: "white",
                fontWeight: 800,
                fontStyle: "italic",
              }}
            >
              Kits Section
            </Text>
          </View>

          <View style={{ padding: 10 }}>
            <View style={{ height: 25 }}></View>
            <Text style={styles.subheading}>International Jerseys</Text>
            <View style={{ height: 30 }}></View>
            <ScrollView horizontal={true}>
              {items.slice(0, 6).map(
                (
                  item,
                  index // Slice items for League Jerseys from 0 to 7 (index 18 to 25)
                ) => (
                  <View key={index} style={styles.itemContainer}>
                    {item}
                  </View>
                )
              )}
            </ScrollView>

            <Text style={styles.subheading}>League Jerseys</Text>
            <View style={{ height: 3 }}></View>
            <ScrollView horizontal={true}>
              {items.slice(6).map(
                (
                  item,
                  index // Slice items for You may also like from 7 (index 25) till the end
                ) => (
                  <View key={index} style={styles.itemContainer}>
                    {item}
                  </View>
                )
              )}
            </ScrollView>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  category2image: {
    height: 86,
    width: 90,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  subheading: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    color: "white",
  },
  bigCardImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  title: {
    marginTop: 11,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  CardSet: {
    padding: 11,
    marginVertical: 2,
    alignItems: "center",
  },
  CardText: {
    fontSize: 40,
    textAlign: "center",
    fontStyle: "italic",
    color: "white",
  },
  itemContainer: {
    marginHorizontal: 6,
  },
});

export default KitScreen;
