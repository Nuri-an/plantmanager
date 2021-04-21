import React from 'react';
import AppLoading from 'expo-app-loading';
import { Welcome } from './src/pages/Welcome';

import { useFonts, Jost_400Regular, Jost_700Bold } from '@expo-google-fonts/jost';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_700Bold
  })

  if(!fontsLoaded) { //enquanto a font não foi carregada, segura a tela de splash do app
    return <AppLoading />
  }

  return (
    <Welcome />
  );
}
