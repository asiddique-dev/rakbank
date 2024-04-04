import { createStore } from 'redux';
import scoreReducer from './reducers/riskScore';


const store = createStore(scoreReducer);

export default store;