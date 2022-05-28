import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as epgReducer } from './epg'
import { reducer as programsReducer } from './programs'

const reducers = {
  epg: epgReducer,
  programs: programsReducer
}

const store = configureStore({
  reducer: combineReducers(reducers)
})

export default store
