import React, { useEffect } from 'react';
import { View, StyleSheet, Text, ImageBackground, SafeAreaView, BackHandler } from 'react-native';
import { gStyle } from '../Styles/style';
import Footer from './footer';
import HeaderMerchant from './header_merchant';

export default function Earn({ navigation }) {

  useEffect(() => {
    const backAction = () => {
      navigation.popToTop(); // Или navigation.navigate('Home');
      return true; // Возвращает true для предотвращения дальнейшего распространения события
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [navigation]); // Указываем navigation в массиве зависимостей

  return (
    <ImageBackground
      source={require('../assets/bg_merchant.png')}
      style={gStyle.backgroundImage}
      imageStyle={{ backgroundColor: '#141617' }}
    >
      <SafeAreaView style={gStyle.container}>
        <View style={gStyle.PagesContent}>
          <Text style={gStyle.gettitle}>Earn</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // Ваши стили
});
