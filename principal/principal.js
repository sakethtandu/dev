import { StyleSheet, View, Text, Button, TouchableOpacity, FlatList } from 'react-native';

import { globalStyles } from '../styles/global';
import React, { useState } from 'react';
import Card from '../shared/card';
import Details from '../principal/Details'
export default function SampleNav({ navigation }) {
  const [menu, setMenu] = useState([
    { title: 'Add student', key: '1' },
    { title: 'Add Staff', key: '2' },
    { title: 'Money Generated', key: '3' },
    { title: 'Money Spent', key: '4' },
  ]);

  const pressHandler = () => {
    navigation.goBack();
  }
  const fun = (item) => {
    {
      (() => {
        if (item.title == 'Add student') {
          return (

            navigation.navigate('Details')
            //  <div>someCase</div>
          )
        }
        else if (item.title == 'Add Staff') {
          return (
            navigation.navigate('AddTeacher')
          )
        }
        else if (item.title == 'Money Generated') {
          return (
            navigation.navigate('MoneyGenerated')
          )
        }
        else if (item.title == 'Money Spent') {
          return (
            navigation.navigate('MoneySpent')
          )
        }
        else {
          return (
            //  <Text style={styles.logo1}> Improper mail or id </Text>
            console.log('other route')
          )
        }
      })()
    }
  }

  // getDataUsingGet(token) {
  //   // var emailId = this.state.email
  //   var url = "http://ec2-52-12-91-65.us-west-2.compute.amazonaws.com:8080/swrmsdc/user/test";
  //   // var url2 = url.concat(emailId);
  //   fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: Bearer + this.token
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     // params: emailId,

  //     //Request Type 
  //   })
  //     .then((response) => response.json())
  //     //If response is in json then in success
  //     .then((responseJson) => {

  //       alert(JSON.stringify(responseJson));
  //       var res = responseJson
  //       console.log(res)
  //       this.props.navigation.navigate('Login', res)

  //     })


  //     //If response is not in json then in error
  //     .catch((error) => {
  //       //Error 
  //       alert(JSON.stringify(error));
  //       console.error(error);
  //     });
  //   Alert.alert('You are redirected to register page! Please Wait')

  //   // verifyOTP
  // }

  return (
    <View style={globalStyles.container}>
      <FlatList data={menu} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => fun(item)}>
          <Card>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </Card>
        </TouchableOpacity>
      )} />
      <View style={styles.bott}>
        <Button title='sample nav'
          onPress={() => navigation.navigate('Details')} />
      </View>
    </View>

    // <View style={globalStyles.container}>
    //   <Text>Principal Screen</Text>
    //   {/* <Button title='back to home screen' onPress={pressHandler} /> */}
    // </View>
  );
}
const styles = StyleSheet.create({
  bott:
  {
    //flexDirection:
    // flexDirection: 'column',
    // justifyContent:'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  contentContainer: {
    flex: 1 // pushes the footer to the end of the screen
  },
  footer: {
    height: 100
  }
});