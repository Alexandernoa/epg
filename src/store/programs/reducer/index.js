import { createSlice } from '@reduxjs/toolkit'

// creating a state as an object to improve performance when checking and extracting a specific program
const initialState = {}

const slice = createSlice({
  name: 'programs',
  initialState,
  reducers: {
    setProgram: (state, action) => {
      if (state[action.payload.id]) {
        return state
      }

      const newState = { ...initialState }
      newState[action.payload.id] = action.payload

      return newState
    }
  }
})

export const reducer = slice.reducer
export const actions = slice.actions
