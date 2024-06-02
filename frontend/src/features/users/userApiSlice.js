import { apiSlice } from "./../../app/api/apiSlice";

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/users",
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
        } catch (e) {
          console.log(e);
        }
      },
    }),
    getUser: builder.query({
      query: (id) => `/users/${id}`,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
        } catch (e) {
          console.log(e);
        }
      },
    }),
    addUser: builder.mutation({
      query: (user) => {
        const formData = new FormData();

        Object.entries(user).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            value.forEach((file) => formData.append(key, file));
          } else {
            formData.append(key, value);
          }
        });

        return {
          url: "/users",
          method: "POST",
          body: formData,
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          dispatch(
            apiSlice.util.updateQueryData("getAllUsers", undefined, (draft) => {
              draft.push(data);
            })
          );
        } catch (e) {
          console.log(e);
        }
      },
    }),
    updateUser: builder.mutation({
      query: (user) => {
        const formData = new FormData();

        Object.entries(user).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            value.forEach((file) => formData.append(key, file));
          } else {
            formData.append(key, value);
          }
        });

        return {
          url: `/users/${user.id}`,
          method: "PUT",
          body: formData,
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          dispatch(
            apiSlice.util.updateQueryData("getUser", arg.id, () => data)
          );
          dispatch(
            apiSlice.util.updateQueryData("getAllUsers", undefined, (draft) => {
              const index = draft.findIndex((user) => user.id === arg.id);
              if (index !== -1) draft[index] = data;
            })
          );
        } catch (e) {
          console.log(e);
        }
      },
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData("getAllUsers", undefined, (draft) => {
              return draft.filter((user) => user.id !== arg);
            })
          );
        } catch (e) {
          console.log(e);
        }
      },
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApiSlice;
