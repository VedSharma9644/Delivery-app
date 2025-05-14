import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const stores = [
  {
    id: 1,
    name: 'Patel Brothers',
    category: 'Indian Essentials',
    time: '30 mins',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Spice Market',
    category: 'Spices & Snacks',
    time: '25 mins',
    rating: 4.2,
  },
  {
    id: 3,
    name: 'Apna Bazaar',
    category: 'Fresh Produce & Dairy',
    time: '25 mins',
    rating: 4.4,
  },
];

const GroceryStoreList = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Grocery Stores</Text>
        <TouchableOpacity>
          <Text style={styles.viewMore}>View More</Text>
        </TouchableOpacity>
      </View>
      {stores.map((store) => (
        <TouchableOpacity 
          key={store.id} 
          style={styles.storeCard}
          onPress={() => router.push({ pathname: '/vendor', params: { store: store.name } })}
        >
          <View style={styles.storeImageContainer}>
            <Ionicons name="storefront-outline" size={40} color="#666" />
          </View>
          <View style={styles.storeInfo}>
            <View style={styles.storeHeader}>
              <Text style={styles.storeName}>{store.name}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>{store.rating}</Text>
                <Ionicons name="star" size={12} color="#FFD700" />
              </View>
            </View>
            <Text style={styles.category}>{store.category}</Text>
            <View style={styles.timeContainer}>
              <Ionicons name="time-outline" size={16} color="#666" />
              <Text style={styles.time}>{store.time}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  viewMore: {
    fontSize: 14,
    color: '#666',
  },
  storeCard: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#FFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  storeImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 8,
    margin: 12,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storeInfo: {
    flex: 1,
    padding: 12,
  },
  storeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  storeName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  rating: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
    marginRight: 4,
  },
  category: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
});

export default GroceryStoreList; 