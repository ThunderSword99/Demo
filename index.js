import {AppRegistry} from 'react-native';
import App from './src/routers/AppNavigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
