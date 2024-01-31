import React from 'react';
import { View, StyleSheet, Text, ImageBackground, SafeAreaView } from 'react-native';
import { gStyle } from '../Styles/style';
import Footer from './footer';
import HeaderMerchant from './header_merchant';

export default function Marketplace({ navigation }) {
  return (

      <ImageBackground
        source={require('../assets/bg_merchant.png')}
        style={gStyle.backgroundImage}
        imageStyle={{ backgroundColor: '#141617' }}
      >
        <SafeAreaView style={gStyle.container}>
        
        <View style={gStyle.PagesContent}>
          <Text style={gStyle.gettitle}>Marketplace</Text>

        </View>


        <Footer navigation={navigation} />
        </SafeAreaView>
      </ImageBackground>

  );
}

const styles = StyleSheet.create({
  // Ваши стили
});
