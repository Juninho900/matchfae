import React from "react";
import styled from "styled-components/native";
import { Link } from 'react-router-dom';

export default () => {
    const View = styled.View`
        flex: 1;
        justify-content: center;
        align-content: center;
        padding: 20px;
        height: 100vh;
    `;
    const Modal = styled.View`
        background-color: #FEFEFE;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0px 7px 10px #000000;
    `;
    const Text = styled.Text`
        font-size: 30px;
        font-weight: bold;
        text-align: center;
    `;
    const ButtonGroup = styled.View`
        flex-direction: row;
        justify-content: space-evenly;
        align-content: center;
        margin-top: 20px;
    `;
    const Button = styled.TouchableOpacity`
        background-color: ${props => props.bgcolor};
        padding: 5px;
        justify-content: center;
        align-content: center;
        border-radius: 5px;
        width: 100px;
    `;
    const ButtonText = styled.Text`
        font-size: 20px;
        font-weight: bold;
        color: #FEFEFE;
        text-align: center;
    `;

    return(
        <View>
            <Modal>
                <Text className="textExit">Tem certeza quer sair?</Text>
                <ButtonGroup>
                    <Link to = "/menu">
                        <Button bgcolor="#777">
                            <ButtonText>
                                Não
                            </ButtonText>
                        </Button>
                    </Link>
                    <Link to = "/login">
                        <Button bgcolor="#3ABDB2">
                            <ButtonText>
                                Sim
                            </ButtonText>
                        </Button>
                    </Link>
                </ButtonGroup>
            </Modal>
        </View>
    );
}