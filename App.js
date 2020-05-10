import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Text, View, SafeAreaView } from 'react-native';
//components.
import Navbar from './Navbar';
import Reminder from './Reminder';


export default function App() {




  //harperrt


  return (
    //SAFE AREA VIEW.
    //ensures padding space across all mobile.
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        {/* ----------------NAVBAR----------------- */}
        <Navbar />
        {/* ----------------REMINDER----------------- */}
        <Reminder />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundImage: 'linear-gradient(15deg, #13547a 0%, #80d0c7 100%)',
    height: '100vh',
    width: '100vw',
    alignItems: 'center',
  },
  wrapper: {



  }


});
