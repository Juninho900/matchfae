import React from 'react';
import styled from 'styled-components/native';
import { Container, Header, HeaderText, Icon, Page } from './Styles';
import { Link } from 'react-router-dom';

function Menu() 
{
    let H1 = styled.Text`
        font-size: 40px;
        font-weight: bold;
        text-align: center;
    `;
    let List = styled.View``;
    let Item = styled.TouchableOpacity`
        padding: 10px;
    `;
    let ItemText = styled.Text`
        font-size: 20px;
        text-align: center;
        font-weight: bold;
    `;

    return (
        <Page>
            <Container>
                <p className="menu">Menu</p>
                <List>
                    <Item><p className="listMenu">Conversas</p></Item>
                    <Link to = "/newEvent">
                        <Item><p className="listMenu">Criar novo evento</p></Item>
                    </Link>
                    <Item><p className="listMenu">Criar novo role</p></Item>
                    <Item><p className="listMenu">Configuração</p></Item>
                    <Link to ="/exit">
                        <Item><p className="listMenu">Sair</p></Item>
                    </Link>
                </List>
            </Container>
        </Page>
    );
}

export default Menu;