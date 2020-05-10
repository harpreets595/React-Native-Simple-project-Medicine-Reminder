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
    <StyledSafeAreaView>
      <StyledView >
        {/* ----------------NAVBAR----------------- */}
        <Navbar />
        {/* ----------------REMINDER----------------- */}
        <Reminder />
      </StyledView>
    </StyledSafeAreaView>
  );
}


const StyledView = styled.View`

`


const StyledSafeAreaView = styled.SafeAreaView`
    background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
    height: 100vh;
    width: 100vw;

`