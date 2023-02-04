
import * as React from 'react';
import { View } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation}) {
  return (
    <View style={{ backgroundColor: '#5a23a6', flex: 1, alignItems: 'center', justifyContent: 'center', paddingLeft: 10, paddingRight: 10 }}>
      <IconButton icon="star-outline" iconColor="yellow" size={50} style={{ marginBottom: 15 }} />
      <Text style={{ marginBottom: 15, color: '#fff'}} variant="displayMedium">Welcome to Doki Grading Calculator!</Text>
      <IconButton icon="gamepad-variant-outline" iconColor="yellow" size={50} style={{ marginBottom: 45 }} />
      <Text style={{ marginBottom: 15, color: '#fff'}} variant="headlineSmall">This app will help you calculate your grades for the semester! Lets start by adding some classes...</Text>
      <Button style={{fontSize: 15}} buttonColor="#fc83e8" icon="alpha-d-box" mode="contained" onPress={() => navigation.navigate('Semester Profile')}>
        <Text style={{ marginBottom: 15, color: '#fff'}} variant="bodyLarge">Get Started</Text>
    </Button>
    </View>
  );
}

const SemesterProfile = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingLeft: 10, paddingRight: 10 }}>
      <Text variant="displayMedium">Semester Classes and grades will go here!</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  const [classes, setClasses] = React.useState({});

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}  options={{ title : 'Getting Started'}}/>
        <Stack.Screen name="Semester Profile" component={SemesterProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
