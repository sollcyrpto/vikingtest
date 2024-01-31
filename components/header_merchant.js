import React from 'react';
import { StyleSheet, ImageBackground, Text, SafeAreaView, View, Image, TouchableOpacity } from 'react-native';
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
          source={require('../assets/coin.png')}
          style={gStyle.icon}
        />
      </View>

      <View style={gStyle.buttonContainer}>
        <TouchableOpacity style={gStyle.button_cr} onPress={() => {/* link */}}>
          <Text style={gStyle.button_crText}>Top Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={gStyle.button_cr} onPress={() => {/* link */}}>
          <Text style={gStyle.button_crText}>Withdraw</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});
