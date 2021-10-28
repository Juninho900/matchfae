import React from 'react';
import './css/Loading.css';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-dom';

const styles = StyleSheet.create
({
    container:
    {
        paddingTop: 30,
        alignItems: 'center',
    },
});

function Loading () {
    return (

        <View style={styles.container}>

            <p className="logo">MatchFAE</p>

            <p className="login">Carregando...</p>

        </View>
    )
}

export default Loading;