import { useGetAllDestinationsQuery } from "./placeSlice";
import DestinationsSection from "./DestinationsSection";

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
    Content = <div>Loading ...</div>;
  } else if (isSuccess) {
    Content = <DestinationsSection destinationsData={posts} />;
  } else if (isError) {
    Content = <div>Something went wrong: {error.message}</div>;
  }

  return Content;
};
