import { apiSlice } from "../../app/api/apiSlice"

const commentsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCommentByPostId: builder.query({
            query: postId => `/comments/${postId}`,
            providesTags: ["Comment"]
        }),
        addComment: builder.mutation({
            query: comment => ({
                url: "/comments",
                method: "POST",
                body: { ...comment }
            }),
            invalidatesTags: ["Comment"]
        })
    })
})

export const { useGetCommentByPostIdQuery, useAddCommentMutation } = commentsApiSlice