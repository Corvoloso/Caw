import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const tron = Reactotron.configure().use(reactotronRedux()).connect();

tron.clear();

console.tron = tron;
