import React from 'react';
import './css/Login.css';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'react-router-dom';

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

function Login () {
    return (

        <View style={styles.container}>

            <p className="logo2">MatchFAE</p>

            <p className="login2">Login</p>

            <TextInput style={styles.input} placeholder="E-mail" />

            <TextInput style={styles.input} secureTextEntry={true} placeholder="Senha" />

            <Link to = "/loading">
                <TouchableOpacity style={styles.button}>
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

export default Login;