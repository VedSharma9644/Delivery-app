import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PromoBanner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.validText}>Valid for a limited time</Text>
          <Text style={styles.titleText}>Free Delivery on{'\n'}Orders Above $25!</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Order Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Ionicons name="bicycle" size={60} color="#FFF" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFF',
  },
  content: {
    backgroundColor: '#FF5722',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  validText: {
    color: '#FFF',
    fontSize: 12,
    opacity: 0.8,
    marginBottom: 4,
  },
  titleText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#FF5722',
    fontWeight: '600',
    fontSize: 14,
  },
  imageContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PromoBanner; 