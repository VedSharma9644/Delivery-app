import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const HomeHeader = () => {
  const router = useRouter();

  const handleNotificationPress = () => {
    router.push('/notifications');
  };

  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Text style={styles.locationLabel}>My Location</Text>
        <View style={styles.locationRow}>
          <Ionicons name="location-outline" size={20} color="#333" />
          <Text style={styles.locationText}>Fremont, CA</Text>
          <Ionicons name="chevron-down" size={20} color="#333" />
        </View>
      </View>
      <TouchableOpacity 
        style={styles.notificationButton}
        onPress={handleNotificationPress}
      >
        <Ionicons name="notifications-outline" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFF',
  },
  locationContainer: {
    flex: 1,
  },
  locationLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginHorizontal: 4,
  },
  notificationButton: {
    padding: 8,
  },
});

export default HomeHeader; 