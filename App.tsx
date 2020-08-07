import React from 'react';

import { StatusBar } from 'expo-status-bar';

import { AppLoading } from 'expo'; // Basicamente, essa importação fará com que a "splash screen" seja mostrada até que as fontes sejam carregadas completamente.

// expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins | Instalação das fontes por meio do "EXPO".

import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'; // Aqui são apenas importações básicas de fontes utilizadas no projeto/aplicação.
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'; // Aqui são apenas importações básicas de fontes utilizadas no projeto/aplicação.

import AppStack from './src/routes/AppStack';

export default function App() {
  let [fontsLoaded] = useFonts({ // Função retirada da página do "EXPO" sobre o carregamento das fontes até a finalização, ou então, será mostrado apenas a "splash screen".
    Archivo_400Regular, // Declaração das fontes importadas que serão utilizadas no projeto/aplicação.
    Archivo_700Bold, // Declaração das fontes importadas que serão utilizadas no projeto/aplicação.
    Poppins_400Regular, // Declaração das fontes importadas que serão utilizadas no projeto/aplicação.
    Poppins_600SemiBold, // Declaração das fontes importadas que serão utilizadas no projeto/aplicação.
  });

  if (!fontsLoaded) { // Apenas um "IF" simples de caso as fontes não sejam carregadas, ele mostre o "APP", neste caso, apenas sendo retornado de maneira simples e básica.
    return <AppLoading />;
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="light" /> 
      </>
    );
  }
}
