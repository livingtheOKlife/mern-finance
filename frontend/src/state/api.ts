import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL })

export const api = createApi({
  baseQuery,
  reducerPath: 'main',
  tagTypes: ['Kpis'],
  endpoints: (build) => ({
    getKpis: build.query<void, void>({
      query: () => 'kpi/kpis/',
      providesTags: ['Kpis']
    })
  }),
})

export const { useGetKpisQuery } = api