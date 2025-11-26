import AsyncStorage from '@react-native-async-storage/async-storage';

const HISTORY_KEY = 'dreamHistory';

export const saveSentimentToHistory = async (newItem: any) => {
  try {
    const json = await AsyncStorage.getItem(HISTORY_KEY);
    let list = json ? JSON.parse(json) : [];


    list = list.filter((item: any) => item.date !== newItem.date);
    list.push(newItem);

    await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(list));
  } catch (err) {
    console.error('History save error:', err);
  }
};

export const loadSentimentHistory = async () => {
  try {
    const json = await AsyncStorage.getItem(HISTORY_KEY);
    const list = json ? JSON.parse(json) : [];
    return list;
  } catch (err) {
    console.error('History read error:', err);
    return [];
  }
};