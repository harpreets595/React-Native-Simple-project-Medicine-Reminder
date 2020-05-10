import React, { useEffect, useState } from 'react'
import { StyleSheet, Button, Text, View, Modal, TouchableHighlight } from 'react-native';
import { medicineReminder } from '../data';
import styled from 'styled-components/native';


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
                    setMessage(`${medicineReminder[day].message} - It is 12pm.`)
                }
                else if (currentMinutes < medicineReminder[day].time) {
                    //
                    setMessage('You are taking your medicine soon')
                }
                else {
                    setMessage('You should have already taken your medicine by now.')
                }
            }
            else {
                setMessage("It's your med day off! ")
            }
        })
    })

    return (


        <View>
            {message !== null && <StyledReminderMessageText>
                {message}
            </StyledReminderMessageText>}

        </View>
    )
}


export default Reminder;



const StyledReminderMessageText = styled.Text`

`
