import { createSlice } from '@reduxjs/toolkit'
import { getUsers } from '../asyncThunks'

const initialState = {
  user: [],
  status: 'idle'
}
const userSlice = createSlice({
  name: 'user state',
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending]: state => {
      state.status = 'loading'
    },
    [getUsers.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.user = action.payload.data
    },
    [getUsers.rejected]: state => {
      state.status = 'failed'
    }
  }
})

export const { reducer: userReducer } = userSlice
