import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation/index';
import { SafeAreaProvider ,  initialWindowMetrics} from 'react-native-safe-area-context';
export default function App() {
  return (
  <SafeAreaProvider initialMetrics={initialWindowMetrics} >
   <Navigation/>
</SafeAreaProvider>
  );
}

