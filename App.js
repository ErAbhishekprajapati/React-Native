import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';

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
      {data ? (
        <ScrollView> {/* ScrollView added for scrolling through long lists */}
          {data.map((item) => (
            <View key={item.id} style={styles.card}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text>{item.body}</Text>
              <Text>{`ID: ${item.id}`}</Text>
            </View>
          ))}
        </ScrollView>
      ) : (
        <Text>Loading...</Text> // Display loading text until data is fetched
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 10,
    width: '100%',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default App;


// here is a single form creation 
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const App = () => {
  // State variables for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Form submission handler
  const handleSubmit = () => {
    console.log('Form Submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Us</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your message"
        value={message}
        onChangeText={setMessage}
        multiline
      />

      <Button title="Submit" onPress={handleSubmit} />

      <Text style={styles.output}>
        {name && email && message ? `Name: ${name}\nEmail: ${email}\nMessage: ${message}` : ''}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    width: '100%',
    borderRadius: 5,
  },
  output: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default App;


// main page with slider
import * as React from 'react';
import { View, Text, Button, Image, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Carousel from 'react-native-snap-carousel';
import { Ionicons } from '@expo/vector-icons';

const { width: screenWidth } = Dimensions.get('window');

// Image Slider HomeScreen
function HomeScreen() {
  // Image Slider Data
  const carouselItems = [
    {
      id: 1,
      title: "Image 1",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "Image 2",
      imageUrl: "https://via.placeholder.com/300/0000FF",
    },
    {
      id: 3,
      title: "Image 3",
      imageUrl: "https://via.placeholder.com/300/FF0000",
    },
  ];

  // Testimonial Data
  const testimonials = [
    {
      id: 1,
      name: "Abhishek Prajapati",
      role: "Er,Software",
      comment: "This app completely changed our business! Excellent user experience and features.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      name: "Mahendra singh",
      role: " sf",
      comment: "The best mobile app I've used. Congratulations to the team!",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/22.jpg"
    },
    {
      id: 3,
      name: "Virendra singh",
      role: "Developer",
      comment: "The interface is very intuitive and the features are amazing. Thanks for the regular updates.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  ];

  // Image Slider Render Item
  const renderImageItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image 
          source={{ uri: item.imageUrl }} 
          style={styles.image} 
          resizeMode="cover"
        />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  // Testimonial Render Item
  const renderTestimonialItem = ({ item }) => {
    return (
      <View style={styles.testimonialCard}>
        <View style={styles.testimonialContent}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
          </View>
          
          <Text style={styles.comment}>"{item.comment}"</Text>
          
          <View style={styles.ratingContainer}>
            {Array(item.rating).fill().map((_, i) => (
              <Ionicons key={i} name="star" size={20} color="#FFD700" />
            ))}
          </View>
          
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.role}>{item.role}</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Image Slider Section */}
      <View style={styles.carouselContainer}>
        <Carousel
          layout={"default"}
          data={carouselItems}
          sliderWidth={screenWidth}
          itemWidth={screenWidth - 60}
          renderItem={renderImageItem}
          autoplay={true}
          autoplayInterval={3000}
          loop={true}
        />
      </View>
      
      {/* Home Content */}
      <View style={styles.homeContent}>
        <Text style={styles.homeText}>Welcome to Our App</Text>
      </View>
      
      {/* Testimonial Section */}
      <View style={styles.testimonialSection}>
        <Text style={styles.sectionTitle}>my customer say that</Text>
        
        <Carousel
          data={testimonials}
          renderItem={renderTestimonialItem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth - 80}
          autoplay={true}
          autoplayInterval={5000}
          loop={true}
          layout={"default"}
          activeSlideAlignment={"center"}
        />
      </View>
    </ScrollView>
  );
}

// बाकी कोड वही रहेगा
function EditProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Edit Profile Screen</Text>
    </View>
  );
}

function AddName() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Add Name </Text>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
      <Button 
        title="Open Edit Profile Menu" 
        onPress={() => navigation.navigate('Edit Profile')}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function SettingsDrawer() {
  return (
    <Drawer.Navigator drawerPosition="right">
      <Drawer.Screen name="Settings Main" component={SettingsScreen} />
      <Drawer.Screen name="Edit Profile" component={EditProfileScreen} />
      <Drawer.Screen name="Add Name" component={AddName} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  carouselContainer: {
    marginTop: 20,
  },
  slide: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  homeContent: {
    padding: 20,
    alignItems: 'center',
  },
  homeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  testimonialSection: {
    padding: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  testimonialCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    height: 280,
  },
  testimonialContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatarContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#4e8cff',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  comment: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    fontStyle: 'italic',
    lineHeight: 22,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  role: {
    fontSize: 14,
    color: '#777',
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsDrawer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// app dev news  api 
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import axios from 'axios';

// Note: In a real app, these should come from environment variables or a config service
const API_KEYS = {
  news: 'pub_78243ec41da181c97c66fbad5bf421f20138d',
  weather: 'd4c8088e25469279f51afae0e7304bd8'
};

const NewsApp = () => {
  const [news, setNews] = useState([]);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      await Promise.all([fetchNews(), fetchWeather()]);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to load data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://newsdata.io/api/1/news', {
        params: {
          country: 'in',
          apikey: API_KEYS.news,
          q: 'uttar pradesh',
          language: 'en,hi',
          category: 'education',
        },
      });
      setNews(response.data.results || []);
    } catch (error) {
      console.error('News API Error:', error);
      throw new Error('News fetch failed');
    }
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: 'Delhi',
          appid: API_KEYS.weather,
          units: 'metric',
        },
      });
      setWeather(response.data);
    } catch (error) {
      console.error('Weather API Error:', error);
      throw new Error('Weather fetch failed');
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData().finally(() => setRefreshing(false));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => alert(item.title)}>
      <View style={styles.card}>
        {item.image_url && (
          <Image 
            source={{ uri: item.image_url }} 
            style={styles.image}
            resizeMode="cover"
          />
        )}
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description || 'No description available'}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading && !refreshing) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
        <TouchableOpacity onPress={fetchData} style={styles.retryButton}>
          <Text style={styles.retryText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Latest News</Text>
      
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={(item) => item.article_id || item.url}
        refreshControl={
          <RefreshControl 
            refreshing={refreshing} 
            onRefresh={handleRefresh} 
          />
        }
        ListFooterComponent={
          weather && (
            <View style={styles.weatherContainer}>
              <Text style={styles.weatherHeading}>Current Weather</Text>
              <Text style={styles.weatherText}>City: {weather.name}</Text>
              <Text style={styles.weatherText}>Temperature: {weather.main.temp}°C</Text>
              <Text style={styles.weatherText}>Weather: {weather.weather[0].description}</Text>
              <Text style={styles.weatherText}>Humidity: {weather.main.humidity}%</Text>
            </View>
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginBottom: 20,
  },
  retryButton: {
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  retryText: {
    color: 'white',
    fontWeight: 'bold',
  },
  weatherContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  weatherHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  weatherText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default NewsApp;
