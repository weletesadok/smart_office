import { apiSlice } from "./../../app/api/apiSlice";

const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPlaces: builder.query({
      query: () => "/places",
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
        } catch (e) {
          console.log(e);
        }
      },
    }),
    getPlace: builder.query({
      query: (id) => `/places/${id}`,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
        } catch (e) {
          console.log(e);
        }
      },
    }),
    addPlace: builder.mutation({
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
          console.log(data)
          dispatch(apiSlice.util.updateQueryData('addPost', undefined, (draft) => {
        draft.push(data);
      }));
        } catch (e) {
          console.log(e);
        }
      },
    }),


  }),
});

export const { useGetAllPostsQuery, useAddPostMutation,useGetPostQuery } = postApiSlice;
