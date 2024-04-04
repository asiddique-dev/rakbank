import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import criteria from '../config/criteria.json';

const ResultScreen = () => {
  const score = useSelector(state => state.score);
  const [investmentCategory, setInvestmentCategory] = useState('');
  const [scoreColor, setScoreColor] = useState('black');
  useEffect(()=>{
    if(score>=criteria.lowRiskMinScore){
        setInvestmentCategory('Low Risk - You can kindly requested to process to open an account');
        setScoreColor('green');
    } else if(score>= criteria.mediumRiskMinScore){
        setInvestmentCategory('Medium Risk - You can kindly requested to process to open an account');
        setScoreColor('green');
    } else {
        setInvestmentCategory('High Risk - You can kindly suggested to check your status with branch manager');
        setScoreColor('red');
    }
  }, [score])
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Investment Category</Text>
      <Text style={styles.categoryText}>{investmentCategory}</Text>
      <Text style={[styles.scoreText, {color: scoreColor}]}>Score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categoryText: {
    fontSize: 18,
    marginBottom: 10,
  },
  scoreText: {
    fontSize: 18,
  },
});

export default ResultScreen;