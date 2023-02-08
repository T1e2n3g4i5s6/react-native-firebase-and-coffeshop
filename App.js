import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomePage from './src/Pages/homePage';

export default function App() {
  return (
    <SafeAreaView>
      <HomePage/>
    </SafeAreaView>
  );
}