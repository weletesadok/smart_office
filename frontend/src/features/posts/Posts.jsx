import { useGetAllPostsQuery } from "./postsApiSlice";
import NewsSection from "./NewsSection"

export default () => {
  let Content = <div>Loading ...</div>;
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllPostsQuery();
  if (isSuccess) {
    Content = <NewsSection newsData={posts}/>;
  } else {
    Content = <div>sone thig wen twront</div>;
  }
  return Content;
};
