import * as React from 'react';
import { AppRegistry } from 'react-native';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './src/App';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);