import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categories = [
  { id: 1, name: 'Grocery', icon: 'cart-outline' },
  { id: 2, name: 'Food', icon: 'fast-food-outline' },
  { id: 3, name: 'Stores', icon: 'storefront-outline' },
];

const CategorySelector = ({ activeCategory, onSelectCategory }) => {
  return (
    <View style={styles.tabBar}>
      {categories.map((category) => {
        const isActive = activeCategory === category.name.toLowerCase();
        return (
          <TouchableOpacity
            key={category.id}
            style={[styles.tab, isActive && styles.activeTab]}
            onPress={() => onSelectCategory(category.name.toLowerCase())}
            activeOpacity={0.8}
          >
            <Ionicons
              name={category.icon}
              size={20}
              color={isActive ? '#FF5722' : '#666'}
              style={{ marginRight: 8 }}
            />
            <Text style={[styles.tabText, isActive && styles.activeTabText]}>{category.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 30,
    marginHorizontal: 16,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 22,
    marginHorizontal: 4,
    backgroundColor: '#F5F5F5',
  },
  activeTab: {
    backgroundColor: '#FF5722',
  },
  tabText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#666',
  },
  activeTabText: {
    color: '#FFF',
  },
});

export default CategorySelector; 