import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Header = () => {
    return(
        <View style={styles.header}>
            <Text style={styles.text}>App Musically</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor:'#069',
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 5,
        marginTop: 10
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
    }
})

export default Header
