import { useGetAllPostsQuery } from "../features/posts/postsApiSlice";
import NewsSection from "../features/posts/NewsSection";

export default () => {
  let Content = <div>Loading ...</div>;
  let slicedPosts;
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllPostsQuery();
  if (isSuccess) {
  if(posts.length > 3){
  
  slicedPosts = posts.slice(0, 3)}else {
  slicedPosts = posts}
    Content = <NewsSection newsData={slicedPosts} />;
  } else {
    Content = <div>sone thig wen twront</div>;
  }
  return Content;
};
