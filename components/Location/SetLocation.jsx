import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const SetLocation = () => {
  const router = useRouter();

  const handleChooseLocation = () => {
    // Navigate to map screen
    router.push('/map');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.illustrationContainer}>
          <View style={styles.iconBackground}>
            <Ionicons name="location" size={80} color="#FF5722" />
          </View>
          <View style={styles.mapIconContainer}>
            <Ionicons name="map" size={40} color="#FF5722" style={styles.mapIcon} />
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Set Your Exact Location</Text>
          <Text style={styles.subtitle}>
            Enable location to find nearby grocery stores faster and easier.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleChooseLocation}
        >
          <Text style={styles.buttonText}>Choose Location</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustrationContainer: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    position: 'relative',
  },
  iconBackground: {
    width: 160,
    height: 160,
    backgroundColor: '#FFF0EB',
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapIconContainer: {
    position: 'absolute',
    bottom: 60,
    right: '30%',
    backgroundColor: '#FFF',
    borderRadius: 30,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  button: {
    backgroundColor: '#FF5722',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 24,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SetLocation; 