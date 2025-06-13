import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Telas principais
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import Avaliar from './src/screens/Avaliar/Avaliar';
import QuizScreen from './src/screens/QuizGamer/Quiz';
import TesteApiScreen from './src/screens/TesteApiScreen';
import GeneroAleatorioScreen from './src/screens/GeneroAleatorioScreen/index'
// Telas adicionais (fora das abas)
import GameDetailsScreen from './src/screens/GameDetailsScreen';
import TelaPerfil from './src/screens/TelaPerfil/index';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Navegação das abas inferiores
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Avaliar':
              iconName = 'game-controller-outline';
              break;
            case 'Quiz':
              iconName = 'help-circle-outline';
              break;
            case 'Melhores':
              iconName = 'flask-outline';
              break;
            case 'Perfil':
            iconName = 'person-outline';
            break;
            case 'Genero':
            iconName = 'flash-outline';
            break;
            default:
              iconName = 'ellipse-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Avaliar" component={Avaliar} />
      <Tab.Screen name="Quiz" component={QuizScreen} />
      <Tab.Screen name="Melhores" component={TesteApiScreen} />
      <Tab.Screen name="Perfil" component={TelaPerfil} />
      <Tab.Screen name="Genero" component={GeneroAleatorioScreen} />
    </Tab.Navigator>
  );
}

// Navegador principal
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Tabs principais */}
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />

        {/* Telas acessadas por navegação interna */}
        <Stack.Screen
          name="GameDetails"
          component={GameDetailsScreen}
          options={({ route }) => ({
            title: route.params?.title || 'Detalhes do Jogo',
          })}
        />
        <Stack.Screen
          name="TelaPerfil"
          component={TelaPerfil}
          options={{ title: 'Tela de Perfil' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
