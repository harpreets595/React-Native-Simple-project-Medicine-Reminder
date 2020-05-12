import React from 'react'
import { StyleSheet, Button, Text, View } from 'react-native';
import styled from 'styled-components/native';


//navbar is being called in app...
const Navbar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>MEDICINE REMINDER</Text>
        </View>
    )
}

export default Navbar;


const styles = StyleSheet.create({
    container: {
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 80,
      marginBottom: 20,
    },
    text:{
        fontSize:45,
        textAlign: "center",
        fontFamily: "serif",
        fontWeight: 'bold',
        color: '#D822D1'
    }

  });
