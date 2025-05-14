import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';

const tabs = [
  {
    name: 'Home',
    icon: 'home-outline',
    activeIcon: 'home',
    path: '/',
  },
  {
    name: 'Orders',
    icon: 'receipt-outline',
    activeIcon: 'receipt',
    path: '/orders',
  },
  {
    name: 'Cart',
    icon: 'cart-outline',
    activeIcon: 'cart',
    path: '/cart',
  },
  {
    name: 'Profile',
    icon: 'person-outline',
    activeIcon: 'person',
    path: '/profile',
  },
];

export default function BottomTabBar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = pathname === tab.path;
        return (
          <TouchableOpacity
            key={tab.name}
            style={[styles.tab, isActive && styles.activeTab]}
            onPress={() => router.push(tab.path)}
          >
            <Ionicons
              name={isActive ? tab.activeIcon : tab.icon}
              size={24}
              color={isActive ? '#FF460A' : '#757575'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingBottom: 20,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  activeTab: {
    backgroundColor: 'transparent',
  },
}); 