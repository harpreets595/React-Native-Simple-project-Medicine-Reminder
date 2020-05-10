import React from 'react'
import { StyleSheet, Button, Text, View } from 'react-native';

//navbar is being called in app...
const Navbar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>MEDICINE REMINDER</Text>
        </View>
    )
}

export default Navbar;

const styles = StyleSheet.create({
    container: {


    },
    title: {
        width: '100%',
        color: 'white',
        fontFamily: "Comic Sans MS",
        alignItems: 'center',







    }


});

