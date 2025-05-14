import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ORDER_ITEMS = [
  {
    id: '1',
    name: 'Mantra Atta',
    price: 299,
    quantity: 1,
    deliveryTime: '25 mins',
  },
  {
    id: '2',
    name: 'Reliance Fresh',
    price: 260,
    quantity: 1,
    deliveryTime: '30 mins',
  },
  {
    id: '3',
    name: 'Dosa Junction',
    price: 199,
    quantity: 1,
    deliveryTime: '15 mins',
  },
];

const OrderSummaryScreen = () => {
  const router = useRouter();
  const itemTotal = ORDER_ITEMS.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 25;
  const tax = 25;
  const total = itemTotal + deliveryFee + tax;

  const renderOrderItem = (item) => (
    <View key={item.id} style={styles.orderItem}>
      <View style={styles.itemInfo}>
        <View style={styles.productImage}>
          <Ionicons name="fast-food" size={24} color="#FF5722" />
        </View>
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.name}</Text>
          <View style={styles.timeContainer}>
            <Ionicons name="time-outline" size={14} color="#666" />
            <Text style={styles.timeText}>{item.deliveryTime}</Text>
          </View>
          <Text style={styles.itemPrice}>${item.price}</Text>
        </View>
      </View>
      <View style={styles.quantityControl}>
        <TouchableOpacity style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>−</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order Summary</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.orderItems}>
          {ORDER_ITEMS.map(renderOrderItem)}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Delivering To</Text>
          <View style={styles.mapContainer}>
            <View style={styles.map} />
          </View>
          <View style={styles.addressInputs}>
            <Text style={styles.inputLabel}>Address</Text>
            <TextInput
              style={styles.input}
              value="10/5 Buchans Drive 3037"
              editable={false}
            />
            <Text style={styles.inputLabel}>Phone Number</Text>
            <View style={styles.phoneInput}>
              <View style={styles.countryCode}>
                <Text style={styles.countryCodeText}>+1</Text>
                <Ionicons name="chevron-down" size={16} color="#333" />
              </View>
              <TextInput
                style={[styles.input, styles.phoneNumber]}
                value="98765 43210"
                editable={false}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.changeButton}>
            <Text style={styles.changeButtonText}>Change</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <View style={styles.paymentMethod}>
            <View style={styles.cardIconContainer}>
              <Ionicons name="card" size={20} color="#FF5722" />
            </View>
            <Text style={styles.cardNumber}>**** **** **** 1234</Text>
            <TouchableOpacity>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.section, styles.billSection]}>
          <View style={styles.billRow}>
            <Text style={styles.billLabel}>Item Total</Text>
            <Text style={styles.billValue}>${itemTotal}</Text>
          </View>
          <View style={styles.billRow}>
            <Text style={styles.billLabel}>Delivery</Text>
            <Text style={styles.billValue}>${deliveryFee}</Text>
          </View>
          <View style={styles.billRow}>
            <Text style={styles.billLabel}>Tax</Text>
            <Text style={styles.billValue}>${tax}</Text>
          </View>
          <View style={[styles.billRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalAmount}>${total}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirm Order</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  placeholder: {
    width: 32,
  },
  content: {
    flex: 1,
  },
  orderItems: {
    padding: 16,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  itemInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  productImage: {
    width: 48,
    height: 48,
    backgroundColor: '#FFF8F6',
    borderRadius: 8,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  timeText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 4,
  },
  quantityButton: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 20,
    color: '#333',
    lineHeight: 20,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    paddingHorizontal: 12,
  },
  section: {
    padding: 16,
    borderTopWidth: 8,
    borderTopColor: '#F5F5F5',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  mapContainer: {
    height: 120,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    marginBottom: 16,
  },
  map: {
    flex: 1,
    backgroundColor: '#E1E1E1',
  },
  addressInputs: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  input: {
    height: 44,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#333',
    marginBottom: 16,
  },
  phoneInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
    marginRight: 8,
  },
  countryCodeText: {
    fontSize: 14,
    color: '#333',
    marginRight: 4,
  },
  phoneNumber: {
    flex: 1,
    marginBottom: 0,
  },
  changeButton: {
    borderWidth: 1,
    borderColor: '#FF5722',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  changeButtonText: {
    fontSize: 14,
    color: '#FF5722',
    fontWeight: '500',
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 12,
  },
  cardIconContainer: {
    width: 32,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardNumber: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    marginLeft: 12,
  },
  changeText: {
    fontSize: 14,
    color: '#FF5722',
    fontWeight: '500',
  },
  billSection: {
    paddingTop: 24,
  },
  billRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  billLabel: {
    fontSize: 14,
    color: '#666',
  },
  billValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  totalRow: {
    marginTop: 12,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FF5722',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  confirmButton: {
    backgroundColor: '#FF5722',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
});

export default OrderSummaryScreen; 