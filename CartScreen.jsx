import React, { useContext, useState } from 'react';
import { View, Text,TextInput, Image, TouchableOpacity, FlatList, StyleSheet, Button, Alert } from 'react-native';
import { CartContext } from './CartContext';

const CartScreen = () => {
  const { cartItems, removeItemFromCart, getTotal } = useContext(CartContext);
  const [isPaymentAlertVisible, setPaymentAlertVisible] = useState(false);

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.img }} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemTitle}>{item.Title}</Text>
        <Text style={styles.cartItemQuantity}>Quantity: {item.quantity}</Text>
        <Text style={styles.cartItemPrice}>Price: {item.Price} Rs</Text>
      </View>
      <TouchableOpacity style={styles.removeButton} onPress={() => removeItemFromCart(item.id)}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  const handlePay = () => {
    Alert.alert(
      'Payment Options',
      'How would you like to pay?',
      [
        {
          text: 'Credit Card',
          onPress: () => setPaymentAlertVisible(true),
        },
        {
          text: 'Debit Card',
          onPress: () => setPaymentAlertVisible(true),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };

  const handlePaymentSuccess = () => {
    setTimeout(() => {
      Alert.alert('Payment Successful', 'Thank you for your purchase!');
    }, 1000); // Delayed by 1 second
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={renderCartItem}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: {getTotal()} Rs</Text>
        <Button title="Proceed to Pay" onPress={handlePay} />
      </View>
      {isPaymentAlertVisible && (
        <View style={styles.paymentAlertContainer}>
          <Text style={styles.paymentAlertText}>Enter Account Number:</Text>
          <TextInput style={styles.accountInput} />
          <Button title="Pay" onPress={() => { 
            setPaymentAlertVisible(false);
            handlePaymentSuccess();
          }} />
        </View>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
  },
  cartItemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cartItemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  cartItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  cartItemQuantity: {
    fontSize: 16,
    color: 'white',
  },
  cartItemPrice: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'white',
  },
  removeButton: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  totalContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  paymentAlertContainer: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  paymentAlertText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  accountInput: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default CartScreen;
