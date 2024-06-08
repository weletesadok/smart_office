import { apiSlice } from "./../../app/api/apiSlice";

const destinationsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllDestinations: builder.query({
      query: (search = "") => `/destinations?search=${search}`,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
        } catch (e) {
          console.log(e);
        }
      },
    }),
    getDestinationById: builder.query({
      query: (id) => `/destinations/${id}`,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
        } catch (e) {
          console.log(e);
        }
      },
    }),
    addDestination: builder.mutation({
      query: (post) => {
        const formData = new FormData();

        Object.entries(post).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            value.forEach((file) => formData.append(key, file));
          } else {
            formData.append(key, value);
          }
        });

        return {
          url: "/destinations",
          method: "POST",
          body: formData,
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          dispatch(
            apiSlice.util.updateQueryData(
              "getAllDestinations",
              undefined,
              (draft) => {
                draft.push(data);
              }
            )
          );
        } catch (e) {
          console.log(e);
        }
      },
    }),
    updateDestination: builder.mutation({
      query: ({ id, ...post }) => {
        const formData = new FormData();

        Object.entries(post).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            value.forEach((file) => formData.append(key, file));
          } else {
            formData.append(key, value);
          }
        });

        return {
          url: `/destinations/${id}`,
          method: "PUT",
          body: formData,
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          dispatch(
            apiSlice.util.updateQueryData(
              "getDestinationById",
              arg.id,
              () => data
            )
          );
          dispatch(
            apiSlice.util.updateQueryData(
              "getAllDestinations",
              undefined,
              (draft) => {
                const index = draft.findIndex((post) => post.id === arg.id);
                if (index !== -1) draft[index] = data;
              }
            )
          );
        } catch (e) {
          console.log(e);
        }
      },
    }),
    deleteDestination: builder.mutation({
      query: (id) => ({
        url: `/destinations/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData(
              "getAllDestinations",
              undefined,
              (draft) => {
                return draft.filter((post) => post.id !== arg);
              }
            )
          );
        } catch (e) {
          console.log(e);
        }
      },
    }),
  }),
});

export const {
  useGetAllDestinationsQuery,
  useGetDestinationByIdQuery,
  useAddDestinationMutation,
  useUpdateDestinationMutation,
  useDeleteDestinationMutation,
} = destinationsApiSlice;
