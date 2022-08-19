import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';

const MeuScroll = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={{ 
                  width: '100%', 
                  height: 159 
                }} />
                <Text style={{
                      backgroundColor: '#CCC', 
                      marginTop: 10,
                      padding: 10
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis, mi non placerat maximus, orci libero iaculis magna, vel pretium metus mi non elit. Nulla sit amet lorem lacinia, faucibus mauris eget, dignissim enim. Phasellus quis volutpat libero. In aliquam ante in lorem faucibus, non imperdiet sem fa.</Text>
                <Text style={{
                      backgroundColor: '#CCC', 
                      marginTop: 10,
                      padding: 10
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis, mi non placerat maximus, orci libero iaculis magna, vel pretium metus mi non elit. Nulla sit amet lorem lacinia, faucibus mauris eget, dignissim enim. Phasellus quis volutpat libero. In aliquam ante in lorem faucibus, non imperdiet sem fa.</Text>
                <Text style={{
                      backgroundColor: '#CCC', 
                      marginTop: 10,
                      padding: 10
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis, mi non placerat maximus, orci libero iaculis magna, vel pretium metus mi non elit. Nulla sit amet lorem lacinia, faucibus mauris eget, dignissim enim. Phasellus quis volutpat libero. In aliquam ante in lorem faucibus, non imperdiet sem fa.</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default MeuScroll;