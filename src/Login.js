import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import './css/Login.css';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'react-router-dom';

export default function Login()
{
    const [email, setEmail] = useState([])
    const [senha, setSenha] = useState([])

    const login = () =>
    {
         alert(email);
         alert(senha);
    }

    return (
        <View style={styles.container}>
        <StatusBar style = "auto" />

            <p className="logo2">MatchFAE</p>

            <p className="login2">Login</p>

            <TextInput placeholder="E-mail" style={styles.input} onChangeText = {text => setEmail(text)} />

            <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} onChangeText = {text => setSenha(text)} />

            <Link to = "/loading">
                <TouchableOpacity style={styles.button} onPress = {() => login()}>
                    <Text style={styles.btnText}>Entrar</Text>
                </TouchableOpacity>
            </Link>

            <TouchableOpacity>
                <Text style={styles.buttonForgot}>Esqueceu sua senha?</Text>
            </TouchableOpacity>

            <p className="or">Ou</p>

            <Link to = "/register">
                <TouchableOpacity>
                    <Text style={styles.buttonCreate}>Criar uma nova Conta</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create
({
    container:
    {
        paddingTop: 30,
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
      borderRadius: 3,
    },
    button:
    {
      width: 300,
      height: 42,
      backgroundColor: '#fff',
      margin: 10,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center'
    },
    btnText:
    {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#3ABDB2'
    },
    buttonForgot:
    {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        margin: 10
    },
    buttonCreate:
    {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10
    },
});