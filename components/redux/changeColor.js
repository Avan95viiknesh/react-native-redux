import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme:'light'
}

export const themeSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    changeMode: (state) => {
     
      state.theme = state.theme === 'dark' ? 'light' :  'dark'
    },
     
  },
})

// Action creators are generated for each case reducer function
export const { changeMode } = themeSlice.actions

export default themeSlice.reducer