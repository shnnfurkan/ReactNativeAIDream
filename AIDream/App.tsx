import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from '../AIDream/src/screens/HomeScreen';
import Chat from '../AIDream/src/screens/ChatScreen';
import History from '../AIDream/src/screens/HistoryScreen';
import { store } from './src/store/Store';
import { Provider } from 'react-redux';



export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerShadowVisible: false,
          headerTintColor: 'black',
          headerStyle: {backgroundColor: 'white'}
        }}>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
          <Stack.Screen name="Chat" component={Chat} options={{ headerShown: true, title: 'Duygu Asistanı' }}/>
          <Stack.Screen name="History" component={History} options={{ headerShown: true, title: 'Duygu Arşivi' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider> 
    </Provider>
  );
}

const styles = StyleSheet.create({});