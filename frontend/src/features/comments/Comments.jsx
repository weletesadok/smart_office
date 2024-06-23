import { useEffect, useState } from "react";
import { useGetCommentByPostIdQuery, useAddCommentMutation } from "./commentsSlice"
import useAuth from "../../hooks/useAuth"
import { ClipLoader } from "react-spinners"

const Discussion = ({ postId }) => {
    const { email } = useAuth()
    let incomingComments = []
    const [comment, setComment] = useState("")
    const { data, isLoading, isError, isSuccess, error } = useGetCommentByPostIdQuery(postId)
    const [addComment, { isError: isCError, isLoading: isCloading, error: cerror, isSuccess: isCsuccess }] = useAddCommentMutation();
    const handleComment = async e => {
        e.preventDefault()
        try {
            if (comment) {

                const res = await addComment({ author: email, content: comment, post: postId })
            }

            setComment("")
        } catch (error) {

        }
    }
    if (isSuccess) {
        incomingComments = data
    }

    return (
        <section className="bg-white  dark:opacity-[0.9] dark:bg-[#223547] py-8 lg:py-16 antialiased">
            <div className="max-w-2xl mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                        Comments{"  "} ({incomingComments.length})
                    </h2>
                </div>
                {email && (<form className="mb-6" onSubmit={handleComment}>
                    <div className="py-2 px-4 mb-4 bg-gray-200 rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <label htmlFor="comment" className="sr-only">
                            Your comment
                        </label>
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            id="comment"
                            rows="6"
                            className="px-0 w-full text-sm bg-gray-200 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                            placeholder="Write a comment..."
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="inline-flex bg-blue-500 items-center py-2.5 px-4 text-xs font-medium text-center  dark:bg-[#ba936f] dark:hover:bg-[#eeb27a] hover:bg-blue-700 text-white rounded"
                    >
                        {isCloading ? <ClipLoader color="white" /> : "Post comment"}
                    </button>
                </form>)}
                {(incomingComments.length > 0) && incomingComments.map((comment) => (
                    <article
                        key={comment._id}
                        className="p-6 mb-3 text-base rounded-lg bg-gray-200 dark:bg-gray-900"
                    >
                        <footer className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                                    <img
                                        className="mr-2 w-6 h-6 rounded-full"
                                        src={comment.author.username}
                                        alt={comment.author.username}
                                    />
                                    {comment.author.username}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    <time
                                        pubdate="true"
                                        dateTime={comment.createdAt}
                                        title={new Date(comment.date).toLocaleDateString()}
                                    >
                                        {new Date(comment.createdAt).toLocaleDateString()}
                                    </time>
                                </p>
                            </div>
                        </footer>
                        <p className="text-gray-500 dark:text-gray-400">
                            {comment.content}
                        </p>

                    </article>
                ))}
            </div>
        </section>
    );
};

export default Discussion;
