import { apiSlice } from "./../../app/api/apiSlice";

const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "/posts",
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
        } catch (e) {
          console.log(e);
        }
      },
    }),
    getPost: builder.query({
      query: (id) => `/posts/${id}`,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
        } catch (e) {
          console.log(e);
        }
      },
    }),
    addPost: builder.mutation({
      query: (post) => {
        const formData = new FormData();

        Object.entries(post).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            value.forEach(file => formData.append(key, file));
          } else {
            formData.append(key, value);
          }
        });

        return {
          url: "/posts",
          method: "POST",
          body: formData,
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          dispatch(apiSlice.util.updateQueryData('getAllPosts', undefined, (draft) => {
            draft.push(data);
          }));
        } catch (e) {
          console.log(e);
        }
      },
    }),
    updatePost: builder.mutation({
      query: ({ id, ...post }) => {
        const formData = new FormData();

        Object.entries(post).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            value.forEach(file => formData.append(key, file));
          } else {
            formData.append(key, value);
          }
        });

        return {
          url: `/posts/${id}`,
          method: "PUT",
          body: formData,
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          dispatch(apiSlice.util.updateQueryData('getPost', arg.id, () => data));
          dispatch(apiSlice.util.updateQueryData('getAllPosts', undefined, (draft) => {
            const index = draft.findIndex(post => post.id === arg.id);
            if (index !== -1) draft[index] = data;
          }));
        } catch (e) {
          console.log(e);
        }
      },
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(apiSlice.util.updateQueryData('getAllPosts', undefined, (draft) => {
            return draft.filter(post => post.id !== arg);
          }));
        } catch (e) {
          console.log(e);
        }
      },
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation
} = postApiSlice;
