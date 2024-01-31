import React, { useState } from 'react';

import { gStyle } from '../Styles/style';
// Импортируем ActivityIndicator для индикатора загрузки
import { StatusBar, StyleSheet, Text, SafeAreaView, View, Button, Alert, Image, ImageBackground, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import Header from '../components/header';
import Username from '../components/username';
import Footer from '../components/footer';

const { width: screenWidth } = Dimensions.get('window');

export default function Home({ navigation }) {
  const [showTextAndButton, setShowTextAndButton] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const [loading, setLoading] = useState(false); // Новое состояние для отслеживания загрузки
  const imageWidthPercentage = 100;

  const toggleContent = () => {
    if (showTextAndButton) {
      setShowTextAndButton(false);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setShowImage(true);
      }, 2000);
    } else {
      setShowImage(false);
      setShowTextAndButton(true);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={gStyle.backgroundImage}
      imageStyle={{ backgroundColor: '#141617' }}
    >
      <SafeAreaView style={gStyle.container}>
        <Header navigation={navigation}/>
        <View style={gStyle.content}>
          <View style={gStyle.topContent}>
            {showTextAndButton && !loading && (
              <View style={gStyle.textAndButtonContainer}>
                <Text style={gStyle.getone}>Get first</Text>
                <Text style={gStyle.gettwo}>NFT HERO</Text>
                <TouchableOpacity style={gStyle.button_cr} onPress={toggleContent}>
                  <Text style={gStyle.button_crText}>Create</Text>
                </TouchableOpacity>
                <Text style={gStyle.gettree}>It's free now</Text>
              </View>
            )}
            {loading && (
              <ActivityIndicator size="large" color="#fff" />
            )}
            {showImage && !loading && (
  <View style={gStyle.imageContainer}>
    <TouchableOpacity onPress={toggleContent}>
      <Image
        source={require('../assets/viking.png')}
        style={{ flex: 1, width: `${imageWidthPercentage}%`, aspectRatio: 0.8, marginTop: 0 }}
      />
    </TouchableOpacity>
  </View>
)}
          </View>
          <View style={gStyle.bottomContent}>
            <View style={gStyle.bottomTextContainer}>
              <Username />
            </View>
          </View>
        </View>
        <Footer navigation={navigation} />
      </SafeAreaView>
    </ImageBackground>
  );
}




const styles = StyleSheet.create({
});
