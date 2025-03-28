import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [data, setData] = useState(null); // Store fetched data

  // Function to fetch data
  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json(); // Parse the JSON response
    setData(json); // Store the fetched data in state
  };

  useEffect(() => {
    fetchData(); // Call fetchData when the component mounts
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>API Data Fetching</Text>
      

      {/* Display data if fetched successfully */}
      {data && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{data[1].title}</Text>
          <Text>{data[1].body}</Text>
          <View>
          data.map((data)=>)}</View>
          <Text> {data.title}</Text>
          <Text> {data.id}</Text>
          <Text> {data.name}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },



});

export default App;
