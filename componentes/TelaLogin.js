import {React} from 'react'
import {View, Text, StyleSheet, Image, TextInput, Button} from 'react-native'

const TelaLogin = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tela de login</Text>
            <Image style={styles.avatar} source={require('../assets/favicon.png')}></Image>
            <Text style={styles.msg}>Efetue seu login para continuar</Text>
            <TextInput style={styles.input} placeholder='Informe seu login'></TextInput>
            <TextInput style={styles.input} placeholder='Informe sua senha'></TextInput>
            <Button 
              title="Entrar"
              color="#34eb52"
              accessibilityLabel="Learn more about this purple button"
            ></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center'
    },
    text: {
        backgroundColor: '#34a8eb',
        color: 'white',
        padding: 10,
        borderRadius: 0,
        marginTop: 20,
        width: '100%',
        textAlign: 'center'
    },
    avatar: {
        borderColor: 'black',
        borderWidth: 3,
        margin: 20
    },
    msg: {
        fontSize: 15,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        marginBottom: 20,
        borderWidth: 1,
        fontSize: 16,
        padding: 5
    }
})

export default TelaLogin