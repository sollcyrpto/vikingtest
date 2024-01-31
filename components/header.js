import React from 'react';
import { StyleSheet, ImageBackground, Text, SafeAreaView, View, Image, TouchableOpacity, Button } from 'react-native';
import { gStyle } from '../Styles/style';

export default function Header({ navigation }) {

const loadScene = () => {
navigation.navigate('Merchant');
}

  return (
    <SafeAreaView style={gStyle.mainhead}>
      <ImageBackground source={require('../assets/balance_bg.png')} style={gStyle.image}>
        <Text style={gStyle.text}>BALANCE</Text>
      </ImageBackground>

      <View style={gStyle.balanceContainer}>
      <Text style={gStyle.balance}>9,999,999</Text>
        <Image
          source={require('../assets/coin.png')} // Укажите путь к вашему изображению
          style={gStyle.icon}
        />
      </View>

      <TouchableOpacity style={gStyle.button} onPress={loadScene}>
        <Text style={gStyle.buttonText}>Merchant</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});
