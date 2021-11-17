import { StatusBar } from 'expo-status-bar';
import React from 'react';
import './css/TinderCards.css';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-dom';

export default function EventList() {
    return (
        <View style = {styles.container}>
            <StatusBar style = "auto" />
            <View style = {styles.box}>
                <Link to = "/eventDesc"><h5>Evento 1</h5>< /Link>
                <p className = "desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar mauris massa, volutpat semper augue vestibulum vel. Mauris tempor hendrerit nisi, eget porttitor massa tristique ac. Sed mollis elementum volutpat. Vestibulum nec tellus libero. Suspendisse porttitor ligula orci, et varius mauris tincidunt vel. Suspendisse non ipsum ut nulla interdum euismod. Phasellus ac mollis magna. Maecenas aliquet nulla ligula, in lobortis lectus sollicitudin at. Curabitur sed accumsan arcu. Nunc porta viverra lobortis. Aliquam at consectetur mauris. Vestibulum euismod velit a lacus consequat aliquam. Nunc orci orci, consequat tincidunt erat et, elementum blandit augue.</p>
            </View>
            <View style = {styles.box}>
                <Link to = "/eventDesc"><h5>Evento 2</h5>< /Link>
                <p className = "desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar mauris massa, volutpat semper augue vestibulum vel. Mauris tempor hendrerit nisi, eget porttitor massa tristique ac. Sed mollis elementum volutpat. Vestibulum nec tellus libero. Suspendisse porttitor ligula orci, et varius mauris tincidunt vel. Suspendisse non ipsum ut nulla interdum euismod. Phasellus ac mollis magna. Maecenas aliquet nulla ligula, in lobortis lectus sollicitudin at. Curabitur sed accumsan arcu. Nunc porta viverra lobortis. Aliquam at consectetur mauris. Vestibulum euismod velit a lacus consequat aliquam. Nunc orci orci, consequat tincidunt erat et, elementum blandit augue.</p>
            </View>
            <View style = {styles.box}>
                <Link to = "/eventDesc"><h5>Evento 3</h5>< /Link>
                <p className = "desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar mauris massa, volutpat semper augue vestibulum vel. Mauris tempor hendrerit nisi, eget porttitor massa tristique ac. Sed mollis elementum volutpat. Vestibulum nec tellus libero. Suspendisse porttitor ligula orci, et varius mauris tincidunt vel. Suspendisse non ipsum ut nulla interdum euismod. Phasellus ac mollis magna. Maecenas aliquet nulla ligula, in lobortis lectus sollicitudin at. Curabitur sed accumsan arcu. Nunc porta viverra lobortis. Aliquam at consectetur mauris. Vestibulum euismod velit a lacus consequat aliquam. Nunc orci orci, consequat tincidunt erat et, elementum blandit augue.</p>
            </View>
            <View style = {styles.box}>
                <Link to = "/eventDesc"><h5>Evento 4</h5>< /Link>
                <p className = "desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar mauris massa, volutpat semper augue vestibulum vel. Mauris tempor hendrerit nisi, eget porttitor massa tristique ac. Sed mollis elementum volutpat. Vestibulum nec tellus libero. Suspendisse porttitor ligula orci, et varius mauris tincidunt vel. Suspendisse non ipsum ut nulla interdum euismod. Phasellus ac mollis magna. Maecenas aliquet nulla ligula, in lobortis lectus sollicitudin at. Curabitur sed accumsan arcu. Nunc porta viverra lobortis. Aliquam at consectetur mauris. Vestibulum euismod velit a lacus consequat aliquam. Nunc orci orci, consequat tincidunt erat et, elementum blandit augue.</p>
            </View>
            <View style = {styles.box}>
                <Link to = "/eventDesc"><h5>Evento 5</h5>< /Link>
                <p className = "desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar mauris massa, volutpat semper augue vestibulum vel. Mauris tempor hendrerit nisi, eget porttitor massa tristique ac. Sed mollis elementum volutpat. Vestibulum nec tellus libero. Suspendisse porttitor ligula orci, et varius mauris tincidunt vel. Suspendisse non ipsum ut nulla interdum euismod. Phasellus ac mollis magna. Maecenas aliquet nulla ligula, in lobortis lectus sollicitudin at. Curabitur sed accumsan arcu. Nunc porta viverra lobortis. Aliquam at consectetur mauris. Vestibulum euismod velit a lacus consequat aliquam. Nunc orci orci, consequat tincidunt erat et, elementum blandit augue.</p>
            </View>
            <View style = {styles.box}>
                <Link to = "/eventDesc"><h5>Evento 6</h5>< /Link>
                <p className = "desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar mauris massa, volutpat semper augue vestibulum vel. Mauris tempor hendrerit nisi, eget porttitor massa tristique ac. Sed mollis elementum volutpat. Vestibulum nec tellus libero. Suspendisse porttitor ligula orci, et varius mauris tincidunt vel. Suspendisse non ipsum ut nulla interdum euismod. Phasellus ac mollis magna. Maecenas aliquet nulla ligula, in lobortis lectus sollicitudin at. Curabitur sed accumsan arcu. Nunc porta viverra lobortis. Aliquam at consectetur mauris. Vestibulum euismod velit a lacus consequat aliquam. Nunc orci orci, consequat tincidunt erat et, elementum blandit augue.</p>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        backgroundColor: '#fff',
        width: 400,
        height: 80,
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 25,
    },
});