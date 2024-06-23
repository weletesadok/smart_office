import { useGetAllPostsQuery } from "./postsApiSlice";
import NewsSection from "./NewsSection";
import Loading from "../../components/SkeletonLoading"

export default () => {
  let Content = <Loading />;
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllPostsQuery();
  if (isSuccess) {
    Content = <NewsSection newsData={posts} />;
  } else {
    Content = <div>sone thig wen twront</div>;
  }
  return Content;
};
