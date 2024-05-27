import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useNavigation } from "@react-navigation/native";

const Balls = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db, "CricketApp");

    onValue(dbRef, (snapshot) => {
      let data = snapshot.val();
      setData(data);
    });
  }, []);

  // Function to render the items for given index range
  const renderItems = (startIndex, endIndex) => {
    let items = [];
    for (let index = startIndex; index <= endIndex && index < data.length; index++) {
      const item = data[index];
      items.push(
        <TouchableOpacity key={index} style={styles.CardSet} onPress={() => navigation.navigate("Desc", { item })}>
          <Image source={{ uri: item.img }} style={styles.bigCardImage} />
          <Text style={styles.title}>{item.Title}</Text>
        </TouchableOpacity>
      );
    }
    return items;
  };

  return (
 
          <View style={{ flex: 1 }}>
      <ImageBackground style={styles.image} source={require("./assets/AppStart.png")}>
        <ScrollView >
        <View style={{flexDirection:"row", alignItems:'center'}}>
        <Image source={require("./assets/icons8-cricket-ball-100.png")} style={styles.category2image} />

          <Text style={{fontSize:47,color:"white",fontWeight:800,fontStyle:"italic" }}>Balls Section</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subheading}>Limited Edition</Text>
            <ScrollView horizontal={true}>
              {renderItems(11, 14)}
            </ScrollView>
            <Text style={styles.subheading}>You may also like</Text>
            <ScrollView horizontal={true}>
              {renderItems(15, 17)}
            </ScrollView>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 5,
  },
  background: {
    flex: 1, // This ensures the image takes up the whole screen
    resizeMode: 'cover', // This property ensures the image covers the entire area of the container
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.66)', // Semi-transparent black overlay
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  category2image:{
 
    height:86,
    width:90,
   
 
 
   },
  subheading: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    color: "white"
  },
  bigCardImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: "white"
  },
  CardSet: {
    padding: 20,
    marginVertical: 4,
    alignItems: "center",
  },
  CardText: {
    fontSize: 50,
    textAlign: 'center',
    fontStyle: "italic",
    color: "white"
  },
  itemContainer: {
    marginHorizontal: 6,
  }
});

export default Balls;
