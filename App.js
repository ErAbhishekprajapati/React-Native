import React from 'react';
import { SafeAreaView, Text, StyleSheet,Button } from 'react-native';

const App = () => {
  const car=()=>{
    console.warn("Function called")
}
  return (

    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello, React Native!</Text>
      <Text style={styles.text}> my Name is abhishek </Text>
      <Text style={{fontSize:30}}>{fruit()}</Text>
      <Text style={{fontSize:30}}>{5*2}</Text>
      <Text style={{fontSize:30}}>{age===39?"above 30":"unknown"}</Text>
      <Button title='on Press' onPress={()=>car()} > </Button>
    </SafeAreaView>
  );
};
let age=30;
function fruit(){
  return "apple";
}

const styles = StyleSheet.create({

  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color:'red',
  },
});

export default App;
