import { useGetAllPostsQuery } from "../features/posts/postsApiSlice";
import NewsSection from "../features/posts/NewsSection";
import Loading from "../components/SkeletonLoading"

export default () => {
  let Content = <Loading />;
  let slicedPosts;
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllPostsQuery();
  if (isSuccess) {
    if (posts.length > 3) {

      slicedPosts = posts.slice(0, 3)
    } else {
      slicedPosts = posts
    }
    Content = <NewsSection newsData={slicedPosts} />;
  } else {
    Content = <div>sonmethig went wrong</div>;
  }
  return Content;
};
