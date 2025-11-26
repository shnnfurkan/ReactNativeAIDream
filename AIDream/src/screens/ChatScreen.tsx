import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { postSentimentDetailAction } from '../store/Redux/DreamStore/DreamAction';
import { HF_TOKEN } from "../helpers/token";

export default function ChatScreen() {
  const dispatch = useDispatch();
  const dreamInfo = useSelector((state: any) => state.dream.dreamInfo);
  const [message, setMessage] = useState("");
  const [currentUserMsg, setCurrentUserMsg] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  const getBorderColor = (label: string) => {
    if (label === 'Very Positive' || label === 'Positive') {
      return '#4CAF50';
    }
    if (label === 'Very Negative' || label === 'Negative') {
      return '#FF5252';
    }
    return '#ffffff';
  };

  const handleAnalyze = () => {
    if (!message.trim()) return;

    const trimmed = message.trim();
    const today = new Date().toLocaleDateString("tr-TR");
    setCurrentDate(today);
    setCurrentUserMsg(trimmed);
    const data = { inputs: trimmed };
    const token = HF_TOKEN;

    dispatch<any>(postSentimentDetailAction(data, token));

    setMessage('');
  };

    useEffect(() => {
    if (!dreamInfo || currentUserMsg !== '') return;

    setCurrentUserMsg(dreamInfo.originalText);
    setCurrentDate(dreamInfo.date);
    }, [dreamInfo]);

  return (
    <ImageBackground
      source={require('../images/1.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.glassContainer}>

        <View style={{ flex: 1 }}>

          {currentDate !== "" && (
            <Text style={styles.dateText}>Tarih: {currentDate}</Text>
          )}

          {currentUserMsg !== '' && (
            <View style={[styles.messageBubble, styles.userBubble]}>
              <Text style={styles.messageText}>{currentUserMsg}</Text>
            </View>
          )}

          {dreamInfo && (
            <View style={[styles.messageBubble, styles.assistantBubble, { borderWidth: 1.5, borderColor: getBorderColor(dreamInfo.label) }]}>
              <Text style={styles.messageText}>
                {`Duygu: ${dreamInfo.label}\n\n`}
                {`Özet: ${dreamInfo.summary}\n\n`}
                {`Öneri: ${dreamInfo.advice}`}
              </Text>
            </View>
          )}

          {!dreamInfo && currentUserMsg === '' && (
            <Text style={styles.placeholder}>
              Bugün nasıl hissediyorsun? Aşağıya yaz ve "Analiz Et"e bas.
            </Text>
          )}

        </View>

        <View style={styles.inputGlass}>
          <TextInput
            placeholder="Bizimle paylaşmak ister misin?"
            placeholderTextColor="#ddd"
            style={styles.input}
            value={message}
            onChangeText={setMessage}
            multiline
          />
        </View>

        <Button
          mode="contained"
          style={styles.button}
          contentStyle={{ paddingVertical: 5 }}
          labelStyle={{ fontSize: 18, fontWeight: '600', color: '#fff' }}
          onPress={handleAnalyze}
        >
          Analiz Et
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
    padding: 20,
    borderRadius: 25,
    width: '90%',
    height: '85%',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },

  dateText: {
    color: '#eee',
    fontSize: 16,
    marginBottom: 8,
  },

  placeholder: {
    color: '#eee',
    fontSize: 18,
    textAlign: 'center',
  },

  messageBubble: {
    padding: 12,
    borderRadius: 14,
    marginVertical: 4,
    maxWidth: '80%',
  },

  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(165, 105, 255, 0.9)',
  },

  assistantBubble: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },

  messageText: {
    color: '#fff',
    fontSize: 16,
  },

  inputGlass: {
    backgroundColor: 'rgba(255,255,255,0.10)',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 12,
  },

  input: {
    minHeight: 40,
    maxHeight: 100,
    color: '#fff',
    fontSize: 18,
  },

  button: {
    backgroundColor: '#A569FF',
    borderRadius: 12,
    alignSelf: 'center',
    width: '60%',
  },
});