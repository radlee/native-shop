import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, Button, 
  Platform, View,
  SafeAreaView,
  Dimensions
} from 'react-native';

export default function App() {
  console.log(Dimensions.get('screen'))
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: "30%"
        }}
      >
        <Text>Some Text</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "web" ? StatusBar.currentHeight : 0
  },
});
