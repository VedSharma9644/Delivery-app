import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
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
          <Image
            source={require('@/assets/mobile-images/vendors/Vendor image.jpg')}
            style={styles.vendorImage}
            resizeMode="cover"
          />
          <View style={styles.infoColumn}>
            <Image
              source={require('@/assets/mobile-images/vendors/Vendor logo.png')}
              style={styles.vendorLogo}
              resizeMode="contain"
            />
            <Text style={styles.storeName}>{store.name}</Text>
            <Text style={styles.category}>{store.category}</Text>
          </View>
          <View style={styles.timeContainer}>
            <Ionicons name="time-outline" size={22} color="#999" />
            <Text style={styles.time}>{store.time}</Text>
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
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#FFF',
    // borderRadius: 16,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.08,
    // shadowRadius: 4,
    // elevation: 2,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  vendorImage: {
    width: 64,
    height: 64,
    borderRadius: 14,
    marginLeft: 16,
    marginRight: 12,
  },
  infoColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 2,
    paddingVertical: 2,
  },
  vendorLogo: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 4,
  },
  storeName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#222',
    marginBottom: 2,
  },
  category: {
    fontSize: 15,
    color: '#999',
    fontWeight: '400',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 4,
    gap: 6,
    minWidth: 80,
    justifyContent: 'flex-end',
  },
  time: {
    fontSize: 15,
    color: '#999',
    marginLeft: 6,
    fontWeight: '500',
  },
});

export default GroceryStoreList; 