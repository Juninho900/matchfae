import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";

let primaryColor = "#30adaf";
let primaryText = "#FEFEFE";
let gray = "#C4C4C4";

export const Page = styled.View`
    height: 900px;
    background-color: ${gray};
`;
export const Picture = styled.View``;
export const Image = styled.Image`
    width: ${props => props.width ?? Dimensions.get("window").width }px;
    height: ${props => props.height ?? Dimensions.get("window").width}px;
    resize-mode: cover;
    margin-top: 20px;
`;
export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
    background-color: #FEFEFE;
    padding: 5px 20px;
`;
export const Description = styled.View`
    background-color: #FEFEFE;
    border-radius: 15px;
    padding: 10px;
`;
export const Name = styled.Text`
    font-size: 30px;
    font-weight: bold;
`;
export const H1 = styled.Text`
    font-size: 20px;
`;
export const P = styled.Text`
    font-size: 15px;
    margin-bottom: 5px;
`;
export const Text = styled.Text`
    font-size: 15px;
`;
export const ButtonContainer = styled.View`
    padding-top: 10px;
`;
export const Button = styled.TouchableOpacity`
    background-color: ${props => props.color ?? primaryColor};
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-top: 20px;
`;
export const ButtonText = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: ${props => props.color ?? primaryText};
`;
export const Icon = (props) => {
    let CustomIcon;
    
    switch (props.type)
    {
        case "AntDesign":
            CustomIcon = AntDesign;
            break;
        case "FontAwesome5":
        default:
            CustomIcon = FontAwesome5;
            break;
    }

    return (
        <CustomIcon
            name = { props.name }
            size = { props.size }
            color = { props.color }
        />
    );
};