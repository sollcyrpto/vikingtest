import React from 'react';
import { View, StyleSheet, Text, ImageBackground, SafeAreaView } from 'react-native';
import { gStyle } from '../Styles/style';
import Footer from '../components/footer';
import HeaderMerchant from '../components/header_merchant';

export default function Merchant({ navigation }) {
  return (

      <ImageBackground
        source={require('../assets/bg_merchant.png')}
        style={gStyle.backgroundImage}
        imageStyle={{ backgroundColor: '#141617' }}
      >
        <SafeAreaView style={gStyle.container}>
        <HeaderMerchant />
        <View style={gStyle.PagesContent}>
          <Text style={gStyle.gettitle}>Sorry =(</Text>
          <Text style={gStyle.getsmall}>At the moment, merchant is not available</Text>
          <Text style={gStyle.getsmallbold}>Coming soon</Text>
        </View>


        <Footer navigation={navigation} />
        </SafeAreaView>
      </ImageBackground>

  );
}

const styles = StyleSheet.create({
  // Ваши стили
});
