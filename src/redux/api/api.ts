import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://task-management-server-lyart-mu.vercel.app",
  }),
  tagTypes: ["recipe"],
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: (title) => {
        return {
          url: `/recipes`,
          method: "GET",
          params: { title },
        };
      },
      providesTags: ["recipe"],
    }),
    addRecipe: builder.mutation({
      query: (data) => {
        return {
          url: "/recipes",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["recipe"],
    }),
    updateRecipe: builder.mutation({
      query: (options) => {
        return {
          url: `/recipe/${options?.id}`,
          method: "PUT",
          body: options?.data,
        };
      },
      invalidatesTags: ["recipe"],
    }),
    deleteRecipe: builder.mutation({
      query: (id) => {
        return {
          url: `/recipe/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["recipe"],
    }),
  }),
});

export const {
  useGetRecipesQuery,
  useAddRecipeMutation,
  useUpdateRecipeMutation,
  useDeleteRecipeMutation,
} = baseApi;
