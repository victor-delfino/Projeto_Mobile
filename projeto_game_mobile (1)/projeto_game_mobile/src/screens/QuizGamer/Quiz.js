import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import styles from './style';

// Gera opções aleatórias para a resposta correta de um campo, usando o pool de valores disponíveis
function getRandomOptions(correct, pool, n = 3) {
  const filtered = pool.filter(item => item !== correct && !!item);
  const random = filtered.sort(() => 0.5 - Math.random()).slice(0, n);
  return [...random, correct].sort(() => 0.5 - Math.random());
}

// Gera perguntas de diferentes tipos, alternando os campos (ano, gênero, nota metacritic, desenvolvedora)
function buildQuizFromGames(games) {
  const questions = [];
  const genresPool = [];
  const devsPool = [];
  const yearsPool = [];
  const metasPool = [];

  games.forEach(g => {
    if (g.genres && g.genres.length > 0) {
      genresPool.push(g.genres[0].name);
    }
    if (g.developers && g.developers.length > 0) {
      devsPool.push(g.developers[0].name);
    }
    if (g.released) {
      yearsPool.push(g.released.slice(0, 4));
    }
    if (g.metacritic !== null && g.metacritic !== undefined) {
      metasPool.push(String(g.metacritic));
    }
  });

  games.forEach((game, i) => {
    // Alterna o tipo da pergunta conforme o índice
    const type = i % 4;
    if (type === 0 && game.released) {
      // Pergunta de Ano
      questions.push({
        question: `Em que ano foi lançado "${game.name}"?`,
        options: getRandomOptions(
          game.released.slice(0, 4),
          yearsPool
        ),
        correctAnswer: game.released.slice(0, 4),
      });
    } else if (type === 1 && game.genres && game.genres.length > 0) {
      // Pergunta de Gênero
      questions.push({
        question: `Qual o principal gênero de "${game.name}"?`,
        options: getRandomOptions(
          game.genres[0].name,
          genresPool
        ),
        correctAnswer: game.genres[0].name,
      });
    } else if (type === 2 && game.metacritic !== null && game.metacritic !== undefined) {
      // Pergunta de Nota Metacritic
      questions.push({
        question: `Qual a nota Metacritic de "${game.name}"?`,
        options: getRandomOptions(
          String(game.metacritic),
          metasPool
        ),
        correctAnswer: String(game.metacritic),
      });
    } else if (type === 3 && game.developers && game.developers.length > 0) {
      // Pergunta de Desenvolvedora
      questions.push({
        question: `Qual o estúdio desenvolvedor de "${game.name}"?`,
        options: getRandomOptions(
          game.developers[0].name,
          devsPool
        ),
        correctAnswer: game.developers[0].name,
      });
    }
  });
  // Garante ao menos 1 pergunta se não houver dados suficientes
  return questions.length ? questions : [{
    question: "Não foi possível gerar perguntas a partir dos dados recebidos.",
    options: ["Ok"],
    correctAnswer: "Ok"
  }];
}

const RAWG_API_KEY = '6b7a585cf2e54cbbb5608315ec2e5f7b';

export default function QuizScreenApi({ navigation }) {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [page, setPage] = useState(1);

  // Função que busca jogos de uma página específica da API
  const fetchGames = async (pageNumber = 1) => {
    setLoading(true);
    // Inclui developers nas respostas usando "developers" no parametro "fields"
    const url = `https://api.rawg.io/api/games?key=${RAWG_API_KEY}&page_size=10&ordering=-metacritic&page=${pageNumber}&fields=name,genres,developers,metacritic,released`;
    const response = await fetch(url);
    const data = await response.json();

    // Para garantir que temos developers, faz uma busca detalhada se precisar:
    const detailedGames = await Promise.all(
      data.results.map(async game => {
        if (!game.developers || !game.developers.length) {
          try {
            const resp = await fetch(`https://api.rawg.io/api/games/${game.id}?key=${RAWG_API_KEY}`);
            const details = await resp.json();
            return { ...game, developers: details.developers };
          } catch {
            return game;
          }
        }
        return game;
      })
    );

    const quiz = buildQuizFromGames(detailedGames);
    setQuizData(quiz);
    setLoading(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  // Ao montar, carrega a primeira página
  useEffect(() => {
    fetchGames(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === quizData[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < quizData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleNextGames = () => {
    setPage(prev => prev + 1);
  };

  if (loading) {
    return <ActivityIndicator color="#3498db" size="large" style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} />;
  }

  if (showResult) {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Quiz Finalizado!</Text>
        <Text style={styles.resultText}>Sua pontuação: {score} / {quizData.length}</Text>
        <TouchableOpacity style={styles.button} onPress={() => fetchGames(page)}>
          <Text style={styles.buttonText}>Reiniciar Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#007bff", marginTop: 20 }]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Voltar ao Início</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#28a745", marginTop: 20 }]}
          onPress={handleNextGames}
        >
          <Text style={styles.buttonText}>Quiz com Outros Jogos</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Quiz sobre Jogos</Text>
      <Text style={styles.questionText}>
        Pergunta {currentQuestionIndex + 1}: {currentQuestion.question}
      </Text>
      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => handleAnswer(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}