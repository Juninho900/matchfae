import React from 'react';
import Header2 from './Header2.js';
import './css/Upload.css';
import IconButton from '@material-ui/core/IconButton';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';
import { Link } from 'react-router-dom';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        alignItems: 'center',
    },
    photo: {
        width: 400,
        height: 400,
        borderRadius: 30,
    },
});

const Upload = () => {
    return(
        <div className="upload">
            <Header2 />
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 30}}>
                <h1>Adicionar a foto do perfil</h1>
            </div>
            <div>
                <View style={styles.container}>
                    <Image style={styles.photo} source={{
                        uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}} />
                </View>
            </div>
            <div className="buttonPhoto">
                <div className="buttonPhoto2">
                    <IconButton>
                        <h3>Escolher a foto</h3>
                    </IconButton>
                </div>
            </div>
            <div className="buttons">
                <div>
                    <Link to = "/register">
                        <IconButton>
                            <h4>Voltar</h4>
                        </IconButton>
                    </Link>                        
                </div>
                <div className="done">
                    <Link to = "/loading">
                        <IconButton>
                            <h3>Feito</h3>
                        </IconButton>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Upload;