import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const slice = createSlice({
  name: 'epg',
  initialState,
  reducers: {
    setEPG: (state, action) => {
      return [...state, ...action.payload.channels]
    }
  }
})

export const reducer = slice.reducer
export const actions = slice.actions
