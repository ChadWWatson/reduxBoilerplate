import {createStore, compose} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import {AsyncStorage} from 'react-native'
import reducer from '../reducer';

var defaultState = {
};

exports.configureStore = (initialState=defaultState) => {
  var store = createStore(reducer, initialState, compose(
    autoRehydrate()
  ));
  persistStore(store, {storage: AsyncStorage});
  return store;
}
