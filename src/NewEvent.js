import React, { useState } from 'react';
import styled from "styled-components/native";
import { Button, ButtonText, Container, Header, HeaderText, Icon, Image, Page, Picture } from "./Styles3";

export default function NewEvent () 
{
    let Title = styled.Text`
        font-size: 40px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 15px;
    `;
    let View = styled.View``;
    let Input = styled.TextInput`
        padding: 5px 10px;
        border: 1px solid #000;
        border-radius: 20px;
        font-size: 20px;
        margin-bottom: 5px;
    `;
    let InputGroup = styled.View`
        flex-direction: row;
    `;
    let Label = styled.Text`
        padding: 5px;
        font-size: 20px;
    `;

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
        <Page>
            <Container>
                <View>
                    <h1 className = "titleNewEvent">Criar novo evento</h1>
                    <Input placeholder="Nome do evento" onChangeText = {text => setNomeEvento(text)} />
                    <Input placeholder="Organizador do evento" onChangeText = {text => setOrganizador(text)} />
                    <Input placeholder="Endereço" onChangeText = {text => setEndereco(text)} />
                    <Input placeholder="Número" onChangeText = {text => setNumero(text)} />
                    
                    <InputGroup>
                        <Label>Data do começo:</Label>
                        <Input placeholder="DD/MM/AAAA" onChangeText = {text => dtComeco(text)} />
                    </InputGroup>
                    <InputGroup>
                        <Label>Hora do começo:</Label>
                        <Input placeholder="HH:MM" onChangeText = {text => hrComeco(text)} />
                    </InputGroup>

                    <InputGroup>
                        <Label>Data do término:</Label>
                        <Input placeholder="DD/MM/AAAA" onChangeText = {text => dtFim(text)} />
                    </InputGroup>
                    <InputGroup>
                        <Label>Hora do término:</Label>
                        <Input placeholder="HH:MM" onChangeText = {text => hrFim(text)} />
                    </InputGroup>
                    
                    <Picture style={{alignItems: "center"}}>
                        <Image
                         style={{ borderRadius: 15 }}
                         source={require("../assets/eventos.png")}
                         width={300}
                         height={300}
                        />
                    </Picture>

                    <Button color="#C4C4C4">
                        <ButtonText color="#000">Adicionar a foto do evento</ButtonText>
                    </Button>
                    <Button onPress = {() => publicar()}>
                        <ButtonText>Publicar</ButtonText>
                    </Button>
                </View>
            </Container>
        </Page>
    );
}