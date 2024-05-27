import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from './CartContext';

interface Item {
  id: string;
  image: any; // Adjust type as per your image source type
}

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<any>(); // Use any type to avoid TypeScript errors
  const { addItemToCart } = useContext(CartContext);

  const carouselData: Item[] = [
    { id: "1", image: require("./assets/crs1.png") },
    { id: "2", image: require("./assets/crs2.png") },
    { id: "3", image: require("./assets/crs3.png") },
  ];

  const [activeSlide, setActiveSlide] = useState<number>(0);

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.carouselImage} />
    </View>
  );

  const addToCart = (item: Item) => {
    addItemToCart(item);
    navigation.navigate("Desc", { item });
  };

  const onPress = (item: { id: number }) => {
    navigation.navigate("Desc", { item });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View style={styles.header}>
        <Image
          source={require("./assets/cricket.png")}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>Cricket Store</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={{ height: 35 }} />
        <Text style={{ fontSize: 28, color: 'white', fontWeight: '500' }}>Category</Text>
        <View style={{ height: 10 }} />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("ball")}
          >
            <Text style={styles.cardText}> Balls</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("CBCI")}
          >
            <Text style={styles.cardText}> Bats</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("FOOT")}
          >
            <Text style={styles.cardText}> Footwear</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Kit")}
          >
            <Text style={styles.cardText}> Kits</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 23 }} />
        <View style={styles.carouselContainer}>
          <Text style={{ fontSize: 25, color: "white" }}>We Offer the best Stuff</Text>
          <View style={{ height: 22 }} />
          <Carousel
            data={carouselData}
            renderItem={renderItem}
            sliderWidth={550}
            itemWidth={320}
            layout={"default"}
            loop
            onSnapToItem={(index) => setActiveSlide(index)}
          />
          <Pagination
            dotsLength={carouselData.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.paginationContainer}
            dotStyle={styles.dotStyle}
            inactiveDotOpacity={0.8}
            inactiveDotScale={0.6}
          />
        </View>
        <TouchableOpacity
          style={styles.aboutStoreButton}
          onPress={() => navigation.navigate("Info")}
        >
          <Text style={styles.aboutStoreText}>About Our Store</Text>
          <Image
            source={require("./assets/feedback.png")}
            style={styles.aboutStoreImage}
          />
        </TouchableOpacity>
        <View style={{ height: 35 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "black",
  },
  headerImage: {
    width: 100,
    height: 100,
  },
  headerText: {
    color: "white",
    fontSize: 40,
    fontWeight: "800",
    textAlign: "left",
  },
  scrollViewContent: {
    alignItems: "center",
    backgroundColor: "black",
    paddingBottom: 20,
  },
  carouselContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  carouselItem: {
    backgroundColor: "lightgray",
    borderRadius: 10,
    overflow: "hidden",
  },
  carouselImage: {
    width: "100%",
    height: 200,
  },
  paginationContainer: {
    paddingTop: 1.5,
    paddingBottom: 1.5,
    borderRadius: 12,
    backgroundColor: "white",
  },
  dotStyle: {
    width: 12,
    height: 12,
    borderRadius: 5,
    marginHorizontal: 16,
    backgroundColor: "rgba(0, 0, 0, 6)",
  },
  aboutStoreButton: {
    width: 360,
    height: 130,
    backgroundColor: "lightblue",
    marginLeft: 16,
    marginRight: 10,
    alignItems: "center",
    borderRadius: 45,
    borderWidth: 1,
  },
  aboutStoreText: {
    textAlign: "center",
    fontSize: 35,
    fontWeight: "300",
  },
  aboutStoreImage: {
    height: 77,
    width: 80,
  },
  card: {
    backgroundColor: "lightblue",
    borderRadius: 60,
    width: 160,
    padding: 5,
    margin: 15,
    elevation: 30,
    alignItems: "center",
    shadowOpacity: 0.3,
    height: 150,
    borderWidth: 3.8,
    borderColor: "white",
  },
  cardText: {
    textAlign: "center",
    marginTop: 0,
    fontSize: 18,
    color: "black",
    fontWeight: "400",
  },
  image: {
    width: 30,
    height: 30,
    alignSelf: "center",
  },
});

export default HomeScreen;
