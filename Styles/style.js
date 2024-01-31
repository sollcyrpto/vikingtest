import { StyleSheet, View } from 'react-native';

export const gStyle = StyleSheet.create({
      main: {
        flex: 1,
        color: '#fff',
        backgroundColor: '#141617',
      },
      container: {
        flex: 1,
      },
      text: {
        color: '#fff'
      },
      mainhead: {
        alignItems: 'center',
      },
      image: {
        width: 342,
        height: 36,
        resizeMode: 'cover',
        marginTop: 20
      },
      text: {
        color: 'white',
        textAlign: 'center',
        marginTop: -8
      },
      balanceContainer: {
        flexDirection: 'row', // Горизонтальное выравнивание
        alignItems: 'center', // Вертикальное выравнивание
        marginTop: -18
      },
      icon: {
        width: 41, // Ширина иконки
        height: 38, // Высота иконки
        marginLeft: 10 // Отступ справа от иконки
      },
      balance: {
        color: 'white',
        fontSize: 37,
        fontWeight: '700'
      },
      button: {
        backgroundColor: '#007bff',
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,
        marginTop: 10,
      },
      buttonText: {
        color: '#ffffff', 
        fontSize: 13,
      },
      button_cr: {
        backgroundColor: '#0094FF',
        padding: 10,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 20,
        marginTop: 5,
        marginLeft: 7,
        marginRight: 7,
      },
      button_crText: {
        color: '#ffffff', 
        fontSize: 18,
        fontWeight: '600'
      },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
      },
      content: {
        flex: 1,
      },

      allcontent: {
        flex: 1,
        maxWidth: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '5%'
      },

      allcttext: {
        color: '#fff',
      },

      PagesContent: {
        flex: 1, // Верхний контент будет занимать 1/2 высоты доступного пространства
        justifyContent: 'top',
        alignItems: 'center',
        marginTop: 20,
      },

      topContent: {
        flex: 1, // Верхний контент будет занимать 1/2 высоты доступного пространства
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      textAndButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      bottomContent: {
        flex: 1, // Нижний контент будет занимать 1/2 высоты доступного пространства
        justifyContent: 'flex-top', // Размещаем его внизу
      },
      bottomTextContainer: {
        padding: 40,
      },
      bottomText: {
        color: 'white',
        textAlign: 'center',
      },
      getone: {
        color: '#fff',
        marginTop: -50,
        fontSize: 20,
        fontWeight: '300'
      },
      gettwo: {
        color: '#fff',
        marginTop: 0,
        fontSize: 40,
        fontWeight: '600'
      },
      gettree: {
        color: '#fff',
        marginTop: 5,
        fontSize: 13,
        fontWeight: '400'
      },
      footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 5,
        left: 0,
        right: 0,
        padding: 15,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 10,
      },
      gettitle: {
        color: '#fff',
        fontSize: 40,
        fontWeight: '600',
        marginTop: 50,
      },
      getsmall: {
        color: '#eee',
        fontSize: 19,
        fontWeight: '300',
        maxWidth: 210,
        marginTop: 15,
        textAlign: 'center'
      },
      getsmallbold: {
        color: '#fff',
        fontSize: 19,
        fontWeight: '500',
        maxWidth: 210,
        marginTop: 15,
        textAlign: 'center'
      },
})