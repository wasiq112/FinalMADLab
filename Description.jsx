import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from './CartContext';
import LoginScreen from './LoginScreen';
const DescriptionScreen = ({ route }) => {
  const { item } = route.params;
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();
  const { addItemToCart } = useContext(CartContext); // Import addItemToCart function from CartContext

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const addToCart = () => {
    const newItem = { ...item, quantity };
    addItemToCart(newItem); // Add item to cart using the addItemToCart function from CartContext
    navigation.navigate('Cart'); // Navigate to Cart screen
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.bordering}>
        <Image source={{ uri: item.img }} style={styles.image} />
      </View>
      <Text style={styles.title}>{item.Title}</Text>
      <Text style={styles.BrandTitle}>by {item.Brand}</Text>
      <View style={styles.spacer}></View>
      <Text style={styles.title2}>Price: {item.Price} Rs</Text>
      <View>
        <Text style={styles.titletext}>Description:</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.quantityButton} onPress={decrementQuantity}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity style={styles.quantityButton} onPress={incrementQuantity}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={addToCart}>
        <Text>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#303038',
  },
  spacer: {
    height: 20,
  },
  image: {
    width: 370,
    height: 370,
    minWidth: 200,
    borderRadius: 45,
    borderWidth: 0.5,
    borderColor: '#53a1e9',
  },
  description: {
    fontSize: 18,
    textAlign: 'justify',
    paddingHorizontal: 20,
    color: 'white',
  },
  bordering: {
    borderRadius: 40,
    overflow: 'hidden',
  },
  title: {
    fontSize: 40,
    textAlign: 'left',
    color: 'white',
    fontWeight: 'bold',
  },
  titletext: {
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 10,
    color: 'white',
  },
  title2: {
    fontSize: 30,
    fontWeight: '700',
    fontStyle: 'italic',
    color: 'white',
  },
  BrandTitle: {
    fontSize: 20,
    textAlign: 'right',
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'lightblue',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  quantityButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButtonText: {
    fontSize: 24,
    color: '#fff',
  },
  quantityText: {
    fontSize: 24,
    color: 'white',
    marginHorizontal: 10,
  },
});

export default DescriptionScreen;
