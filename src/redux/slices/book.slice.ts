import type { PayloadAction } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

export const STATUSES = ['Dang cho muon', 'Co san', 'Da mat'] as const

export interface Book {
  id: string
  name: string
  author: string
  publicYear: string
  genre: string
  status: (typeof STATUSES)[number]
}

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    books: [] as Book[],
  },
  reducers: {
    add: (state, action: PayloadAction<Omit<Book, 'id'>>) => {
      const data = validation(action.payload)
      state.books.push({ ...data, id: Date.now().toString() })
    },

    edit: (state, action: PayloadAction<Book>) => {
      const data = validation(action.payload)

      const index = state.books.findIndex(({ id }) => id === action.payload.id)
      if (index === -1) throw new Error('Book not found')
      state.books[index] = {
        ...data,
        id: action.payload.id,
      }
    },

    remove: (state, action: PayloadAction<Pick<Book, 'id'>>) => {
      const index = state.books.findIndex(({ id }) => id === action.payload.id)
      if (index === -1) throw new Error('Book not found')
      state.books = state.books.filter(({ id }) => id !== action.payload.id)
    },
  },
})

export const { add, edit, remove } = bookSlice.actions
export default bookSlice.reducer

const validation = (book: Omit<Book, 'id'>) => {
  if (!book.name.trim()) throw new Error('name is missing')
  if (!book.author.trim()) throw new Error('author is missing')
  if (!book.publicYear.trim()) throw new Error('publicYear is missing')
  else if (!Number.parseInt(book.publicYear, 10))
    throw new Error('publicYear is invalid')

  if (!STATUSES.includes(book.status))
    throw new Error(`status is not in ${STATUSES.join(', ')}`)
  if (!book.genre.trim()) throw new Error('genre is missing')

  return book
}
