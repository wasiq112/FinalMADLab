import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

class InformationPage extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ padding: 15, alignItems: 'center', backgroundColor: "black" }}>
          <Text style={styles.heading}>Welcome to Lahore Cricket Store</Text>
          <Text style={styles.paragraph}>
            At Lahore Cricket Store, we're passionate about cricket, and we're here to serve all your cricketing needs. Whether you're a seasoned cricketer or just starting out, we have everything you need to excel on the pitch. From top-quality bats and balls to premium cricket shoes and complete kits, we've got you covered.
          </Text>
          <Text style={styles.subheading}>Our Commitment to Quality</Text>
          <Text style={styles.paragraph}>
            We understand the importance of quality when it comes to cricket equipment. That's why we handpick each item in our store to ensure that you're getting the best products available. Our range includes bats from leading brands, meticulously crafted balls, comfortable and durable shoes, and comprehensive kits designed to meet the needs of players at every level.
          </Text>
          <Text style={styles.subheading}>Expert Advice</Text>
          <Text style={styles.paragraph}>
            Not sure which bat is right for you? Need advice on selecting the perfect pair of cricket shoes? Our knowledgeable staff is here to help. With years of experience in the game, we can provide expert guidance to help you make the right choices for your game.
          </Text>
          <Text style={styles.subheading}>Convenient Location</Text>
          <Text style={styles.paragraph}>
            Located in the heart of Lahore, our store is easily accessible to cricket enthusiasts from all over the city. Whether you're a local player or visiting from out of town, you'll find us conveniently located for all your cricketing needs.
          </Text>
          <Text style={styles.subheading}>Visit Us Today</Text>
          <Text style={styles.paragraph}>
            Ready to take your cricket game to the next level? Visit Lahore Cricket Store today and explore our extensive range of cricket equipment. We're committed to helping you perform at your best on the cricket field.
          </Text>
          <Text style={styles.contact}>Contact Us</Text>
          <Text style={styles.email}>Email: info@lahorecricketstore.com</Text>
          <Text style={styles.signature}>- Lahore Cricket Store</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "white"
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: "white"
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
    color: "white"
  },
  contact: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
    color: "white"
  },
  email: {
    fontSize: 16,
    marginBottom: 20,
    color: "white"
  },
  signature: {
    marginTop: 40,
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#888',
    color: "white"
  },
});

export default InformationPage;
