import React, { useState } from 'react';
import './css/Register.css';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Picker } from 'react-native';
import { Link } from 'react-router-dom';

export default function Register()
{
    const [nome, setNome] = useState([])
    const [sexo, setSexo] = useState(['Sexo','Feminino','Masculino'])
    const [sexoSelecionado, setSexoSelecionado] = useState([])
    const [estadoCivil, setEstadoCivil] = useState(['Estado Civil','Solteiro','Casado','Viúvo'])
    const [estadoCivilSelecionado, setEstadoCivilSelecionado] = useState([])
    const [idade, setIdade] = useState([])
    const [email, setEmail] = useState([])
    const [senha, setSenha] = useState([])

    const cadastro = () =>
    {
        alert(nome);
        alert(sexoSelecionado);
        alert(estadoCivilSelecionado);
        alert(idade);
        alert(email);
        alert(senha);
    }

    return (
        <View style={styles.container}>

            <p className="logo">MatchFAE</p>
            <p className="create">Criar uma nova conta</p>
            <TextInput placeholder="Nome" style={styles.input} onChangeText = {text => setNome(text)} />
            <Picker selectedValue={sexoSelecionado} 
                style={styles.input}
                onValueChange={(itemValue) => setSexoSelecionado(itemValue)}
                onChangeText = {text => setSexoSelecionado(text)}>
                {
                    sexo.map(sx => 
                    {
                        return <Picker.Item label={sx} value={sx} />
                    })
                }
            </Picker>
            <Picker selectedValue={estadoCivilSelecionado} 
                style={styles.input}
                onValueChange={(itemValue) => setEstadoCivilSelecionado(itemValue)}
                onChangeText = {text => setEstadoCivilSelecionado(text)}>
                {
                    estadoCivil.map(ec => 
                    {
                        return <Picker.Item label={ec} value={ec} />
                    })
                }
            </Picker>
            <TextInput style={styles.input} placeholder="Idade" onChangeText = {text => setIdade(text)} />
            <TextInput style={styles.input} secureTextEntry={true} placeholder="Criar nova senha" onChangeText = {text => setSenha(text)} />
            <TextInput style={styles.input} secureTextEntry={true} placeholder="Confirmar a senha" />

                <Link to = "/login">
                    <TouchableOpacity>
                        <Text style={styles.buttonCreate}>Voltar</Text>
                    </TouchableOpacity>
                </Link>

                <Link to = "/upload">
                    <TouchableOpacity style={styles.button} onPress = {() => cadastro()}>
                        <Text style={styles.btnText}>Cadastrar</Text>
                    </TouchableOpacity>
                </Link>
        </View>
    );
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
      borderRadius: 5,
    },
    button:
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