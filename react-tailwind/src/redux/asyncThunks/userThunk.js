import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUsersServices } from '../../services'
export const getUsers = createAsyncThunk(
  'getUsers',
  async pageNumber => {
    try {
      const response = await getUsersServices(pageNumber)
      const data = { data: response.data.data, status: response.status }
      return data
    } catch (error) {
      alert('issue in coincap server ')
      console.error(error.message)
    }
  }
)
