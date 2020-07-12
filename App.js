import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Product from './screen/Product';

export default function App() {

  try {
    return (
      <View style={styles.container}>
        <ScrollView>
            < Product/>
        </ScrollView>
        
      </View>
    );
  } catch (error) {
    console.log(error);
  }
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 35,
    
  }
});
