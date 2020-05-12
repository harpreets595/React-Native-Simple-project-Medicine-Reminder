import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Text, View, SafeAreaView } from 'react-native';
//components.
import Navbar from './Navbar';
import Reminder from './Reminder';
import styled from 'styled-components/native';


export default function App() {

  //harperrt


  return (
    //SAFE AREA VIEW.
    //ensures padding space across all mobile.
    <SafeAreaView style={styles.back} >
      <View style={styles.container}>
        {/* ----------------NAVBAR----------------- */}
        <Navbar/>
        {/* ----------------REMINDER----------------- */}
        <Reminder />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 25,
    // backgroundColor: '#D822D1',
    // padding: 100
    // marginVertical: 20,
  },
  back:{
    // marginTop:25,
    backgroundColor: '#C7ACCB',
    height: 1000,
  }
});
