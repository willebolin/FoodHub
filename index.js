import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Flurry from 'react-native-flurry-sdk';

const FLURRY_IOS_API_KEY = 'WMS3YKHDQSZ5RHVVZXDP'

new Flurry.Builder()
  .withCrashReporting(true)
  .withLogEnabled(true)
  .withLogLevel(Flurry.LogLevel.DEBUG)
  .build(FLURRY_IOS_API_KEY);

AppRegistry.registerComponent(appName, () => App);
