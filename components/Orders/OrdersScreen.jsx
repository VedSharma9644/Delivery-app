import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import SafeAreaWrapper from '@/components/Common/SafeAreaWrapper';

const CURRENT_ORDERS = [
  {
    id: '1',
    storeName: 'Big Bazaar',
    productName: 'Fortune Atta-5kg',
    date: 'April 19, 2025',
    price: '$280',
    status: 'On Deliver'
  },
  {
    id: '2',
    storeName: 'Fresh Basket',
    productName: 'Aashirvaad Salt-1kg',
    date: 'April 18, 2025',
    price: '$32',
    status: 'On Deliver'
  },
  {
    id: '3',
    storeName: 'Taza Mart',
    productName: 'Amul Butter-500g',
    date: 'March 19, 2025',
    price: '$240',
    status: 'On Deliver'
  },
];

const PAST_ORDERS = [
  {
    id: '4',
    storeName: 'Big Bazaar',
    productName: 'Fortune Atta-5kg',
    date: 'April 10, 2025',
    price: '$280',
    status: 'Delivered'
  },
  {
    id: '5',
    storeName: 'Fresh Basket',
    productName: 'Aashirvaad Salt-1kg',
    date: 'April 5, 2025',
    price: '$32',
    status: 'Cancelled'
  },
  {
    id: '6',
    storeName: 'Taza Mart',
    productName: 'Amul Butter-500g',
    date: 'March 28, 2025',
    price: '$240',
    status: 'Delivered'
  },
];

const OrdersScreen = () => {
  const [activeTab, setActiveTab] = useState('current');
  const router = useRouter();

  const handleOrderPress = (order) => {
    router.push('/order-summary');
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Delivered':
        return {
          container: { backgroundColor: '#E8F5E9' },
          text: { color: '#4CAF50' }
        };
      case 'Cancelled':
        return {
          container: { backgroundColor: '#FFEBEE' },
          text: { color: '#F44336' }
        };
      default:
        return {
          container: { backgroundColor: '#E8F5E9' },
          text: { color: '#4CAF50' }
        };
    }
  };

  const renderOrderItem = ({ item }) => {
    const statusStyle = getStatusStyle(item.status);
    
    return (
      <TouchableOpacity 
        style={styles.orderCard}
        onPress={() => handleOrderPress(item)}
      >
        <View style={styles.orderImageContainer}>
          <View style={styles.imageContainer}>
            <Ionicons name="cube" size={40} color="#FF5722" />
          </View>
        </View>
        <View style={styles.orderInfo}>
          <View style={styles.orderHeader}>
            <View>
              <Text style={styles.storeName}>{item.storeName}</Text>
              <Text style={styles.productName}>{item.productName}</Text>
            </View>
            <View style={[styles.statusContainer, statusStyle.container]}>
              <Text style={[styles.statusText, statusStyle.text]}>{item.status}</Text>
            </View>
          </View>
          <View style={styles.orderFooter}>
            <View style={styles.dateContainer}>
              <Ionicons name="calendar-outline" size={16} color="#666" />
              <Text style={styles.dateText}>{item.date}</Text>
            </View>
            <Text style={styles.priceText}>{item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaWrapper>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Orders</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'current' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('current')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'current' && styles.activeTabText,
            ]}
          >
            Current Order
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'past' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('past')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'past' && styles.activeTabText,
            ]}
          >
            Past Orders
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={activeTab === 'current' ? CURRENT_ORDERS : PAST_ORDERS}
        renderItem={renderOrderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.ordersList}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    padding: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginRight: 8,
    borderRadius: 100,
  },
  activeTab: {
    backgroundColor: '#000',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  activeTabText: {
    color: '#FFF',
  },
  ordersList: {
    padding: 16,
    paddingTop: 0,
  },
  orderCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  orderImageContainer: {
    marginRight: 12,
  },
  imageContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF8F6',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderInfo: {
    flex: 1,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  storeName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  productName: {
    fontSize: 14,
    color: '#666',
  },
  statusContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 100,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  priceText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});

export default OrdersScreen; 