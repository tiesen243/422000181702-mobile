import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import authReducer from '@/redux/slices/auth.slice'
import bookReducer from '@/redux/slices/book.slice'
import counterReducer from '@/redux/slices/counter.slice'
import studentReducer from '@/redux/slices/student.slice'
import { todosApi } from '@/redux/slices/todos.slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    book: bookReducer,
    counter: counterReducer,
    student: studentReducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    // oxlint-disable-next-line unicorn/prefer-spread
    getDefaultMiddleware().concat(todosApi.middleware),
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
