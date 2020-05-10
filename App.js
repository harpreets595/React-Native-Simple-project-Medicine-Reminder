import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
//components.
import Navbar from './Navbar';
import Reminder from './Reminder';


export default function App() {







  return (
    <View style={styles.container}>
      {/* ----------------NAVBAR----------------- */}
      <Navbar />
      {/* ----------------REMINDER----------------- */}
      <Reminder />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundImage: 'linear-gradient(15deg, #13547a 0%, #80d0c7 100%)',
    width: '100%',
    height: '100%',

  },
  bitch: {
  }

});
