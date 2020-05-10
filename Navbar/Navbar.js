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
        width: '100%',
        height: '10%',

    },
    title: {
        color: 'black',
        padding: '24px',
        fontFamily: "Comic Sans MS",
        textAlign: 'center',
        // fontSize: '50px'


    }


});

