import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const splash1 = require('@/assets/mobile-images/Splash Screen 1.jpg');
const splash2 = require('@/assets/mobile-images/Splash Screen 2.jpg');

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  const [step, setStep] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (step === 0) {
      const timer = setTimeout(() => setStep(1), 1500);
      return () => clearTimeout(timer);
    } else if (step === 1) {
      const timer = setTimeout(() => router.replace('/login'), 1500);
      return () => clearTimeout(timer);
    }
  }, [step, router]);

  return (
    <ImageBackground
      source={step === 0 ? splash1 : splash2}
      style={styles.bg}
      resizeMode="cover"
    />
  );
}

const styles = StyleSheet.create({
  bg: {
    width: width,
    height: height,
    flex: 1,
  },
}); 