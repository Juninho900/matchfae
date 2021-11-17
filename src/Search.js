import { StatusBar } from 'expo-status-bar';
import React from 'react';
import './css/TinderCards.css';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Link } from 'react-router-dom';

export default function Search() 
{
    return (
        <View style = {styles.container}>
            <StatusBar style = "auto" />
            <TextInput style={styles.input} placeholder="Busca" />
            <View style = {styles.box}>
                <Link to = "/eventDesc"><h6>Evento 1</h6>< /Link>
            </View>
            <View style = {styles.box}>
                <Link to = "/info"><h6>Bilbo Baggins</h6>< /Link>
            </View>
            <View style = {styles.box}>
                <Link to = "/eventDesc"><h6>Evento 2</h6>< /Link>
            </View>
            <View style = {styles.box}>
                <Link to = "/info"><h6>Alfrid Lickspittle</h6>< /Link>
            </View>
            <View style = {styles.box}>
                <Link to = "/eventDesc"><h6>Evento 3</h6>< /Link>
            </View>
            <View style = {styles.box}>
                <Link to = "/eventDesc"><h6>Gandalf</h6>< /Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#fff',
        width: 450,
        height: 40,
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
    },
    box: {
        backgroundColor: '#fff',
        width: 400,
        height: 70,
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
    },
});