import type { PayloadAction } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

export interface Student {
  id: string
  name: string
}

const initialState: Student[] = []

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    addStudent: (state, action: PayloadAction<Student>) => {
      state.push(action.payload)
    },

    updateStudent: (state, action: PayloadAction<Student>) => {
      const index = state.findIndex(
        (student) => student.id === action.payload.id
      )
      if (index !== -1) state[index] = action.payload
    },

    deleteStudent: (state, action: PayloadAction<Pick<Student, 'id'>>) =>
      state.filter((student) => student.id !== action.payload.id),
  },
})

export const { addStudent, updateStudent, deleteStudent } = studentSlice.actions
export default studentSlice.reducer
