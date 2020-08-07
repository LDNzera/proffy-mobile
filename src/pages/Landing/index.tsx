import React from 'react';

import { Image, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import styles from './styles';

function Landing() { 
  const { navigate } = useNavigation(); // const { navigate } = Desestruturação para utilização de outros meios dentro do "useNavigation".

  function handleNavigationsToGiveClassesPage() { // Criação de uma função para se direcionar à tela de dar aulas, pelo método de "Navigation Stack".
    navigate('GiveClasses'); // Chamamento da função "navigate" e a incluição da página à ser direcionado após clicar.
  }

  function handleNavigateToStudyPages() {
    navigate('Study');
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.tittle}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.tittleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton onPress={handleNavigateToStudyPages} style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyIcon} />

          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton onPress={handleNavigationsToGiveClassesPage} style={[styles.button, styles.buttonSecondary]}>
          <Image source={giveClassesIcon} />

          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

        <Text style={styles.totalConnections}>
          Total de 285 conexões já realizadas! {' '}
          <Image source={heartIcon} />
        </Text>
    </View>
  );
}


export default Landing;