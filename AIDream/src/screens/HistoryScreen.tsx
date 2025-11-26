import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { loadSentimentHistory } from '../helpers/HistoryStorage';


export default function HistoryScreen() {
  
  
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const list = await loadSentimentHistory();
      setHistory(list);
    };

    load();
  }, []);

  const getBorderColor = (label: string) => {
    if (label === 'Very Positive' || label === 'Positive') {
      return '#4CAF50';
    }
    if (label === 'Very Negative' || label === 'Negative') {
      return '#FF5252';
    }
    return '#ffffff';
  };

  return (
    <ImageBackground
      source={require('../images/1.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.glassContainer}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={history.length === 0 ? styles.emptyContainer : undefined}
        >
          {history.length === 0 ? (
            <Text style={styles.emptyText}>
              Henüz kaydedilmiş bir duygu analizi yok.
            </Text>
          ) : (
            history.map((item, index) => (
              <View
                key={index}
                style={[styles.card, { borderColor: getBorderColor(item.label) }]}
              >
                <Text style={styles.fieldText}>
                  <Text style={styles.fieldLabel}>Tarih: </Text>
                  {item.date}
                </Text>

                <Text style={styles.fieldText}>
                  <Text style={styles.fieldLabel}>Mesajım: </Text>
                  {item.originalText}
                </Text>

                <Text style={styles.fieldText}>
                  <Text style={styles.fieldLabel}>Duygu: </Text>
                  {item.label}
                </Text>

                <Text style={styles.fieldText}>
                  <Text style={styles.fieldLabel}>Özet: </Text>
                  {item.summary}
                </Text>

                <Text style={styles.fieldText}>
                  <Text style={styles.fieldLabel}>Öneri: </Text>
                  {item.advice}
                </Text>
              </View>
            ))
          )}
        </ScrollView>
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

  scroll: {
    flex: 1,
  },

  emptyContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyText: {
    color: '#eee',
    fontSize: 16,
    textAlign: 'center',
  },

  card: {
    borderWidth: 1.5,
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },

  fieldLabel: {
    fontWeight: '600',
    color: '#fff',
  },

  fieldText: {
    color: '#eee',
    fontSize: 16,
    marginBottom: 4,
  },
});