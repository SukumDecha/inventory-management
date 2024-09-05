import { IExpenseByCategorySummary } from "./../types/index.d";
import { IDashboardMetrics, INewProduct, IProduct, IUser } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["dashboardMetrics", "products", "users", "expenses"],
  endpoints: (builder) => ({
    getDashboardMetrics: builder.query<IDashboardMetrics, void>({
      query: () => "/dashboard",
      providesTags: ["dashboardMetrics"],
    }),
    getProducts: builder.query<IProduct[], string | void>({
      query: (search) => ({
        url: "/products",
        params: search ? { search } : {},
      }),
      providesTags: ["products"],
    }),
    createProduct: builder.mutation<IProduct, INewProduct>({
      query: (newProduct) => ({
        url: "/products",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["products"],
    }),
    getUsers: builder.query<IUser[], void>({
      query: () => "/users",
      providesTags: ["users"],
    }),
    getExpenseByCategory: builder.query<IExpenseByCategorySummary[], void>({
      query: () => "/expenses",
      providesTags: ["expenses"],
    }),
  }),
});

export const {
  useGetDashboardMetricsQuery,
  useGetProductsQuery,
  useCreateProductMutation,
  useGetUsersQuery,
  useGetExpenseByCategoryQuery,
} = api;
