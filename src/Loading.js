import React, { useEffect } from 'react';
import './css/Loading.css';
import { View, Text, StyleSheet } from 'react-native';
import { Link, useHistory } from 'react-router-dom';

const styles = StyleSheet.create
({
    container:
    {
        paddingTop: 30,
        alignItems: 'center',
    },
});


function Loading () {

    const history = useHistory();

    useEffect(() => {

        setTimeout(() => {
            
            history.push("/tinderCards");
        }, 5000);    

    }, []);

    return (

        <View style={styles.container}>
            <p className="logo">MatchFAE</p>
            <p className="login">Carregando...</p>
        </View>
    )
}

export default Loading;