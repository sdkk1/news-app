import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { composeWithDevTools } from 'redux-devtools-extension'
import articleReducer from './reducers/article'

const rootReducer = combineReducers({
  article: articleReducer
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['article']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeWithDevTools())
export const persistor = persistStore(store)
