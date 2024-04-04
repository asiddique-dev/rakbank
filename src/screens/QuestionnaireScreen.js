import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import * as Progress from 'react-native-progress';
import Questions from '../components/Questions';
import { calculateRisk } from '../utils';
import questions from '../config/questions.json';

function QuestionnaireScreen({ navigation }) {
  const dispatch = useDispatch();
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = new Animated.Value(1);

  const handleOptionSelect = (option) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(async () => {
      if (currentIndex + 1 < questions.length) {
        setAnsweredQuestions([...answeredQuestions, option]);
        setCurrentIndex(currentIndex + 1);
      }
      else {
        if (answeredQuestions.length < questions.length) {
          const calculatedRisk = calculateRisk([...answeredQuestions, option]);
          setAnsweredQuestions([...answeredQuestions, option]);
          await dispatch({ type: 'UPDATE', score: calculatedRisk });
          navigation.navigate("Result");
        }
      }

      fadeAnim.setValue(1);
    });
  };

  const handleBackPress = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setAnsweredQuestions(answeredQuestions.slice(0, answeredQuestions.length - 1));
      fadeAnim.setValue(1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.progressText}>{currentIndex + 1} of {questions.length}</Text>
      <Progress.Bar progress={(answeredQuestions.length / questions.length)} width={null} height={15} color='#4CAF50' />

      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <Questions
          question={questions[currentIndex]?.question}
          options={questions[currentIndex]?.options}
          onSelect={handleOptionSelect}
        />
      </Animated.View>

      {currentIndex > 0 && (
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Text style={styles.backButtonText}>Previous Question</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  progressText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center'
  },
  backButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 50
  },
  backButtonText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default QuestionnaireScreen;
