import React, { useEffect, useState } from 'react'
import { StyleSheet, Button, Text, View, Modal, TouchableHighlight } from 'react-native';
import { medicineReminder } from '../data';
import styled from 'styled-components/native';
import Emoji from 'react-native-emoji';


//array of days from medicineReminder object. -> [wednesday, sunday]
const dayArray = Object.keys(medicineReminder);

const Reminder = () => {

    const [medicineData, setMedicineData] = useState(null);
    const [message, setMessage] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        //current day - will convert anyday (wednesday => wed)
        let getDay = new Date().toDateString().split(' ')[0].toLowerCase();
        //get minutes.
        let date = new Date();
        let currentMinutes = date.getHours() * 60 + date.getMinutes()

        //get hour
        let getHours = new Date().getHours();

        //get minutes for current date 
        dayArray.forEach((day) => {
            //only if it is the same day.
            if (day === getDay) {
                if (currentMinutes === medicineReminder[day].time) {
                    setMessage(`${medicineReminder[day].message} - It is 12pm.  
                    -Hayepreet`)
                }
                else if (currentMinutes < medicineReminder[day].time) {
                    setMessage(`Ju are taking your medicine soon Today Priu  -Hayepreet`)
                }
                else {
                    setMessage(`Ju should have already taken jur medication by now Priuu  -Hayepreet `)
                }
            }
            else {
                setMessage(`No medication Taday Priuu !!  It's jur med day off! -Hayepreet`)
            }
        })
    })
    return (
        <View>
            {message !== null && <Text style={styles.text}>
                {message}
            </Text>}
            <Text style={{textAlign: "center"}}>
                <Emoji name="facepunch" style={styles.emo} />
                <Emoji name="facepunch" style={styles.emo} />
                <Emoji name="blush" style={styles.emo} />
            </Text>
        </View>
    )
}

export default Reminder;

const styles = StyleSheet.create({
    text:{
        marginTop:50,
        fontSize:35,
        textAlign: "center",
        fontFamily: "serif",
        fontWeight: 'bold',
        color: '#074F9B'
        
    },
    emo:{
        fontSize: 100, 
    },


  });
