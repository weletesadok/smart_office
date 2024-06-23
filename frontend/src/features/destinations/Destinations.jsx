import { useGetAllDestinationsQuery } from "./placeSlice";
import DestinationsSection from "./DestinationsSection";
import Loading from "../../components/SkeletonLoading"


export default () => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllDestinationsQuery();


  let Content;

  if (isLoading) {
    Content = <Loading />;
  } else if (isSuccess) {
    Content = <DestinationsSection destinationsData={posts} />;
  } else if (isError) {
    Content = <div>Something went wrong: {error.message}</div>;
  }

  return Content;
};
