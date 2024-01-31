import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { gStyle } from '../Styles/style';

const { width } = Dimensions.get('window'); // Получаем ширину экрана

export default function Footer({ navigation }) {

 

  const iconSize = width * 0.30; // Устанавливаем размер иконки как 27% от ширины экрана
  const paddingHorizontal = width * 0.06; // Устанавливаем горизонтальные отступы как 5% от ширины экрана

  

  return (



    <View style={[gStyle.footer, { paddingLeft: paddingHorizontal, paddingRight: paddingHorizontal }]}>

      <TouchableOpacity onPress={() => navigation.navigate('Earn')}>
        <Image
          source={require('../assets/btn.png')}
          style={{ width: iconSize, height: iconSize }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {/* обработчик нажатия для второй кнопки */}}>
        <Image
          source={require('../assets/btn2.png')}
          style={{ width: iconSize, height: iconSize }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Marketplace')}>
        <Image
          source={require('../assets/btn3.png')}
          style={{ width: iconSize, height: iconSize }}
        />
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  
});
