import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.data = action.payload
    },
    logout: (state, action) => {
      state.data = null
    },
  },
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer