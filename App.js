// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>navya889</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import Home from './screens/home';
import About from './screens/about';
//import Navigator from './routes/homeStack';
import React, { useState } from 'react';
import Navigator from './routes/drawer';
//import Navigator from './routes/drawer';
//import React, { useState } from 'react';


export default function App() {


   return (
      // <Home/>
      // <About />

      // componentDidMount(){

      // AsyncStorage.getItem('token') ? navigation.navigate('Home'):navigation.navigate('Login')
      // }

      <Navigator />
   );

}


