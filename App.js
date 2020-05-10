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
    <SafeAreaView>
      <View style={styles.container}>
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
    width: '100%',
    height: '10%',

  },


});
