import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import SafeAreaWrapper from '@/components/Common/SafeAreaWrapper';
import HomeHeader from '@/components/Home/HomeHeader';
import SearchBar from '@/components/Home/SearchBar';
import PromoBanner from '@/components/Home/PromoBanner';
import CategorySelector from '@/components/Home/CategorySelector';
import GroceryStoreList from '@/components/Home/GroceryStoreList';
import FoodList from '@/components/Home/FoodList';

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('grocery');

  const renderCategoryContent = () => {
    switch (activeCategory) {
      case 'grocery':
        return <GroceryStoreList />;
      case 'food':
        return <FoodList />;
      case 'stores':
        return (
          <View style={{ padding: 32, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: '#F5F5F5',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16,
            }}>
              {/* Placeholder icon */}
            </View>
            <View>
              <View style={{ alignItems: 'center' }}>
                <View style={{ height: 24 }} />
                <View style={{ width: 120, height: 16, backgroundColor: '#EEE', borderRadius: 8 }} />
              </View>
              <View style={{ height: 8 }} />
              <View style={{ width: 180, height: 12, backgroundColor: '#EEE', borderRadius: 6 }} />
            </View>
            <View style={{ alignItems: 'center', marginTop: 16 }}>
              <View style={{ width: 200, height: 16, backgroundColor: '#EEE', borderRadius: 8 }} />
              <View style={{ height: 8 }} />
              <View style={{ width: 160, height: 12, backgroundColor: '#EEE', borderRadius: 6 }} />
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaWrapper style={{ flex: 1 }}>
      <HomeHeader />
      <PromoBanner />
      <SearchBar />
      <CategorySelector activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        {renderCategoryContent()}
      </ScrollView>
    </SafeAreaWrapper>
  );
}
