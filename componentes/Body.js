import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import styleExterno from '../styles.js'

class Body extends React.Component{
    render(){
        return (
          <View>
            <View style={styles.view}>
              <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.image } />
              <Text style={styleExterno.fontStyle}>Ssred ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis, mi non placerat maximus, orci libero iaculis magna, vel pretium metus mi non elit. Nulla sit amet lorem lacinia, faucibus mauris eget, dignissim enim. Phasellus quis volutpat libero. In aliquam ante in lorem faucibus, non imperdiet sem fa.</Text>
            </View>

            <View style={styles.view}>
              <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.image} />
              <Text style={styles.text}>Lored ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis, mi non placerat maximus, orci libero iaculis magna, vel pretium metus mi non elit. Nulla sit amet lorem lacinia, faucibus mauris eget, dignissim enim. Phasellus quis volutpat libero. In aliquam ante in lorem faucibus, non imperdiet sem fa.</Text>
            </View>

            <View style={styles.view}>
              <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.image} />
              <Text style={styles.text}>Lored ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis, mi non placerat maximus, orci libero iaculis magna, vel pretium metus mi non elit. Nulla sit amet lorem lacinia, faucibus mauris eget, dignissim enim. Phasellus quis volutpat libero. In aliquam ante in lorem faucibus, non imperdiet sem fa.</Text>
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  view: {
    marginTop: 30,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 10
  },
  image: { 
    width: '80%', 
    height: 120,
    margin: 20
  },
  text: {
    width: '80%',
  }
})

export default Body