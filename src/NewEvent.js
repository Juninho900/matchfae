import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Picker } from 'react-native';
import styled from "styled-components/native";
import { Link } from 'react-router-dom';

import { Page, Header, HeaderText, Picture, Image, Description, Name, H1, P, ButtonText, ButtonContainer } from "./Styles";

export default function NewEvent () 
{

    const [nomeEvento, setNomeEvento] = useState([])
    const [organizador, setOrganizador] = useState([])
    const [endereco, setEndereco] = useState([])
    const [numero, setNumero] = useState([])
    const [dtComeco, setDtComeco] = useState([])
    const [dtFim, setDtFim] = useState([])
    const [hrComeco, setHrComeco] = useState([])
    const [hrFim, setHrFim] = useState([])

    const publicar = () =>
    {
        alert(nomeEvento);
        alert(organizador);
        alert(endereco);
        alert(numero);
        alert(dtComeco);
        alert(hrComeco);
        alert(dtFim);
        alert(hrFim);
    }

    return (
        <View style={styles.container}>
                    <h1 >Criar novo evento</h1>
                    <TextInput style={styles.input} placeholder="Nome do evento" onChangeText = {text => setNomeEvento(text)} />
                    <TextInput style={styles.input} placeholder="Organizador do evento" onChangeText = {text => setOrganizador(text)} />
                    <TextInput style={styles.input} placeholder="Endereço" onChangeText = {text => setEndereco(text)} />
                    <TextInput style={styles.input} placeholder="Número" onChangeText = {text => setNumero(text)} />
                    <h7>Data do começo:</h7><TextInput style={styles.inputShort} placeholder="DD/MM/AAAA" onChangeText = {text => setDtComeco(text)} />
                    <h7>Hora do começo:</h7><TextInput style={styles.inputShort} placeholder="HH:MM" onChangeText = {text => setHrComeco(text)} />
                    <h7>Data do término:</h7><TextInput style={styles.inputShort} placeholder="DD/MM/AAAA" onChangeText = {text => setDtFim(text)} />
                    <h7>Hora do término:</h7><TextInput style={styles.inputShort} placeholder="HH:MM" onChangeText = {text => setHrFim(text)} />
                    <Picture style={{alignItems: "center"}}>
                        <Image style={{ borderRadius: 15 }} source={require("../assets/eventos.png")} width={300} height={300} />
                    </Picture>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btnText}>Adicionar a foto do evento</Text>
                    </TouchableOpacity>
                    <Link to = "/event">
                    <TouchableOpacity style={styles.button2} onPress = {() => publicar()}>
                        <Text style={styles.btnText2}>Publicar</Text>
                    </TouchableOpacity>
                    </Link>
        </View>
    );
}

const styles = StyleSheet.create
({
    container:
    {
        alignItems: 'center',
    },
    input:
    {
      margin: 10,
      padding: 10,
      width: 300,
      backgroundColor: '#fff',
      fontSize: 16,
      fontWeight:'bold',
      borderRadius: 5,
    },
    inputShort:
    {
      margin: 10,
      padding: 10,
      width: 150,
      backgroundColor: '#fff',
      fontSize: 16,
      fontWeight:'bold',
      borderRadius: 5,
    },
    button:
    {
        width: 300,
        height: 42,
        backgroundColor: '#C4C4C4',
        margin: 10,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button2:
    {
        width: 300,
        height: 42,
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText:
    {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    btnText2:
    {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#3ABDB2'
    },
    buttonCreate:
    {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        margin: 10
    },
});