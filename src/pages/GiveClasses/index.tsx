import React from 'react';

import { View, ImageBackground, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import giveClassesBackgroundImg from '../../assets/images/give-classes-background.png'

import styles from './styles';

// É interessante reforçar que, qualquer imagem adicionada com a propriedade de "ImageBackground", deve receber dois parâmetros, sendo eles: 
//    
//    - um de "source" que nada mais é do que a própria imagem;
//    - um um "style", declarando seu tamanho;
//
// Basicamente... sendo essas as propriedades necessárias para se declarar uma imagem de fundo, com o "ImageBackground".

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() { // Criação de uma função para se retornar à tela principal, pelo método de "Navigation Stack".
    goBack(); // Chamamento da função "navigate" e a incluição da página à ser retornada.
  }

  return (
    <View style={styles.container}>
      <ImageBackground 
        resizeMode="contain" 
        source={giveClassesBackgroundImg} 
        style={styles.content}
      >
        <Text style={styles.tittle}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor em nossa plataforma "web".
        </Text>
      </ImageBackground>

      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;