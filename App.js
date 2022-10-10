import React, { useState } from 'react'
import { View, StyleSheet, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
    const [text, setText] = useState('Digite alguma coisa na caixa de texto')

    const speak = () => {
        Speech.speak(text, {
            language: 'pt-BR'
        })
    }

    const handleText = (e) => {
        setText(e)

        if (e === '') {
            setText('Digite alguma coisa na caixa de texto')
        }
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                onChangeText={e => handleText(e)}
                placeholder="Digite alguma coisa..."
            />
            <Button
                title='Falar'
                onPress={speak}
                style={styles.button}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        height: 40,
        width: 100,
        backgroundColor: 'blue',
        borderRadius: 10,
        marginTop: 20,
    },
    input: {
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderColor: '#121212',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        color: '#000',
        fontSize: 20,
    },
})