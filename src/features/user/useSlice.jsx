import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateAvatar: (state, action) => {
      state.data.avatar = action.payload
    },
    login: (state, action) => {
      state.data = action.payload
    },
    logout: (state, action) => {
      state.data = null
    },
  },
})

export const { login, logout, updateAvatar } = userSlice.actions
export default userSlice.reducer