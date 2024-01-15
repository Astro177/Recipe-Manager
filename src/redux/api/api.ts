import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://task-management-server-eight-pied.vercel.app",
  }),
  tagTypes: ["recipe"],
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();
        if (priority) params.append("priority", priority);
        return {
          url: `/tasks`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["recipe"],
    }),
    addRecipe: builder.mutation({
      query: (data) => {
        return {
          url: "/tasks",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["recipe"],
    }),
    updateRecipe: builder.mutation({
      query: (options) => {
        return {
          url: `/tasks/${options?.id}`,
          method: "PUT",
          body: options?.data,
        };
      },
      invalidatesTags: ["recipe"],
    }),
    deleteRecipe: builder.mutation({
      query: (id) => {
        return {
          url: `/task/${id}`,
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
