import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, useStore } from 'react-redux'

import { counterReducer } from '@/features/counter/counter.slice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

type AppStore = typeof store

const useAppDispatch = useDispatch.withTypes<AppStore['dispatch']>()
const useAppSelector = useSelector.withTypes<ReturnType<AppStore['getState']>>()
const useAppStore = useStore.withTypes<AppStore>()

export type { AppStore }
export { store, useAppDispatch, useAppSelector, useAppStore }
