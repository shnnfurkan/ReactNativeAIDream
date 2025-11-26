import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const welcomeMessages = [
  'Hoş geldin, bugün nasılsın?',
  'Bugün güzel bir gün, düşüncelerini paylaşmak ister misin?',
  'Tekrar merhaba! Bugün neler hissettin?',
  'DREAM hazır, duygularını birlikte analiz edelim mi?',
  'Selam! Birlikte bugünü biraz daha hafifletelim.',
];


export default function HomeScreen() {


  const navigation = useNavigation<any>();
  const [welcomeText, setWelcomeText] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * welcomeMessages.length);
    setWelcomeText(welcomeMessages[randomIndex]);
  }, []);


  return (
    <ImageBackground
      source={require('../images/1.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.glassContainer}>
        <Text style={styles.title}>DREAM</Text>

        {welcomeText ? (
          <Text style={styles.subtitle}>{welcomeText}</Text>
        ) : null}

        <Button
          mode="contained"
          style={styles.button}
          contentStyle={{ paddingVertical: 5 }}
          labelStyle={{
            fontSize: 18,
            fontWeight: '600',
            fontFamily: 'Montserrat-Medium'
          }}
          onPress={() => navigation.navigate('Chat')}
        >
          Duygu Asistanı
        </Button>

        <Button
          mode="contained"
          style={styles.button}
          contentStyle={{ paddingVertical: 5, }}
          labelStyle={{
            fontSize: 18,
            fontWeight: '600',
            fontFamily: 'Montserrat-Medium'
          }}
          onPress={() => navigation.navigate('History')}
        >
          Duygu Arşivi
        </Button>
      </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  glassContainer: {
    padding: 25,
    borderRadius: 25,
    width: '90%',

    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },

  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 36,
    letterSpacing: 2,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 20,
    color: '#eee',
    marginBottom: 36,
  },

  button: {
    marginBottom: 15,
    borderRadius: 12,
    backgroundColor: '#A569FF',
    width: '90%',
    alignSelf: 'center',
  },
});