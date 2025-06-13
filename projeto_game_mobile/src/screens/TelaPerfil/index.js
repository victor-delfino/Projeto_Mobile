import React, { useState } from 'react';
import { View, TextInput, Image, ScrollView } from 'react-native';
import Botao from '../../components/botao/Botao';
import UserInfo from '../../components/UserInfo/index';
import styles from './styles';

function TelaPerfil(props) {
  const [nome, setNome] = useState('Victor');
  const [idade, setIdade] = useState('23');
  const [preferencias, setPreferencias] = useState('RPG, Ação, Sandbox');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://pbs.twimg.com/media/GOmaxRnWwAE0TKS.jpg' }}
        style={styles.avatar}
      />

      <UserInfo nome={nome} idade={idade} preferencias={preferencias} />

      <TextInput
        style={styles.input}
        placeholder="Editar Nome"
        placeholderTextColor="#999"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Editar Idade"
        placeholderTextColor="#999"
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Editar Preferências"
        placeholderTextColor="#999"
        value={preferencias}
        onChangeText={setPreferencias}
      />

      <Botao title="Voltar para Home" onPress={() => props.navigation.goBack()} />
    </ScrollView>
  );
}

export default TelaPerfil;
