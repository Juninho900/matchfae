import React from 'react';
import styled from 'styled-components/native';
import { Container, Header, HeaderText, Icon, Page } from './Styles';

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
                <p className="menu">Buscar</p>
                <List>
                    <Item><p className="listMenu"></p></Item>
                    <Item><p className="listMenu2"></p></Item>
                    <Item><p className="listMenu3"></p></Item>
                    <Item><p className="listMenu4"></p></Item>
                    <Item><p className="listMenu5"></p></Item>
                </List>
            </Container>
        </Page>
    );
}

export default Menu;