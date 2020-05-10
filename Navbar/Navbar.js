import React from 'react'
import { StyleSheet, Button, Text, View } from 'react-native';
import styled from 'styled-components/native';


//navbar is being called in app...
const Navbar = () => {
    return (
        <StyledNavView>
            <StyledNavText>MEDICINE REMINDER</StyledNavText>
        </StyledNavView>
    )
}

export default Navbar;




const StyledNavView = styled.View`
`

const StyledNavText = styled.Text`
        width: 100%;
        color: white;
        font-family: "Comic Sans MS";
        align-Items: 'center';
        font-size: 50px;
        margin-horizontal: 50;

`

