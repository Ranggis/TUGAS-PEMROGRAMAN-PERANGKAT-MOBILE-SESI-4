import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../screens/StartScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailLabuanBajoScreen from '../screens/DetailLabuanBajoScreen';
import TicketScreen from '../screens/TicketScreen';
import DetailVeneziaScreen from '../screens/DetailVeneziaScreen';
import DetailAmsterdamScreen from '../screens/DetailAmsterdamScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Inisialisasi Stack Navigator
const Stack = createNativeStackNavigator();

/**
 * APP NAVIGATOR
 * Menangani alur navigasi antar halaman:
 * 1. StartScreen → halaman pembuka
 * 2. HomeScreen → halaman utama
 * 3. DetailScreen → halaman detail destinasi
 */
const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="StartScreen"
      screenOptions={{
        headerShown: false, // Semua header disembunyikan
      }}
    >
      {/* Start Screen (Landing Page) */}
      <Stack.Screen name="StartScreen" component={StartScreen} />

      {/* Home Screen (Halaman utama setelah tombol Start Exploring ditekan) */}
      <Stack.Screen name="HomeScreen" component={HomeScreen} />

      {/* Detail Screen Labuan Bajo) */}
      <Stack.Screen name="DetailLabuanBajoScreen" component={DetailLabuanBajoScreen} />

      {/* Detail Screen Venezia) */}
      <Stack.Screen name="DetailVeneziaScreen" component={DetailVeneziaScreen} />

      {/* Detail Screen Amsterdam) */}
      <Stack.Screen name="DetailAmsterdamScreen" component={DetailAmsterdamScreen} />

      {/* Detail Profil Screen) */}
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />

      {/* Detail Screen Ticket Screen) */}
      <Stack.Screen name="TicketScreen" component={TicketScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
