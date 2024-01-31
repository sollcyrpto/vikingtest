import React from 'react';
import { StyleSheet, Dimensions, SafeAreaView, Text, View } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function Header() {
  const fontSizeForWelcome = calculateFontSize(1.4); // 1.4% от высоты экрана для 'WELCOME'
  const fontSizeForNick = calculateFontSize(5); // 4% от высоты экрана для 'Vik Medos'
  const fontSizeForUser = calculateFontSize(2); // 2% от высоты экрана для '@VV_TapViking'
  const paddingTop = calculatePaddingTop();

  

  return (
    <View style={[styles.main, { paddingTop }]}>
        <Text style={[styles.welcome, { fontSize: fontSizeForWelcome }]}>WELCOME</Text>
        <Text style={[styles.nick, { fontSize: fontSizeForNick }]}>Vik Mendos</Text>
        <Text style={[styles.user, { fontSize: fontSizeForUser }]}>@VV_TapViking</Text>
    </View>
  );
}

function calculateFontSize(percent) {
  return screenHeight * (percent / 100);
}

function calculatePaddingTop() {
    if (screenWidth > 700) { // Для очень широких экранов
      return 40;
    } else if (screenWidth > 500) { // Для средних экранов
      return 30;
    } else if (screenWidth > 400) { // Для немного меньших экранов
      return 80;
    } else { // Для мобильных устройств маленького размера
      return 20;
    }
  }

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    textAlign: 'center',
  },
  welcome: {
    color: '#fff',
    fontWeight: '300',
    textAlign: 'center',
  },
  nick: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
  user: {
    color: '#fff',
    fontWeight: '300',
    textAlign: 'center',
  },
});
