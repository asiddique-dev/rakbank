import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuestionnaireScreen from '../screens/QuestionnaireScreen';
import ResultScreen from '../screens/ResultScreen';

const Stack = createNativeStackNavigator();

function AppNavigations() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Questionnaire">
        <Stack.Screen name="Questionnaire" component={QuestionnaireScreen} options={{ title: 'Risk Assessment' }} />
        <Stack.Screen name="Result" component={ResultScreen} options={{ title: 'Risk Assessment Result' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigations;