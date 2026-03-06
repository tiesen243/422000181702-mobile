// oxlint-disable typescript/no-invalid-void-type

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const todosApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    all: builder.query<Todo[], void>({
      query: () => '/todos',
    }),
    byId: builder.query<Todo, number>({
      query: (id) => `/todos/${id}`,
    }),
  }),
})

export const { useAllQuery, useByIdQuery } = todosApi
