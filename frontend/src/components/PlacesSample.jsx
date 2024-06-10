import { useGetAllDestinationsQuery } from "../features/destinations/placeSlice";
import DestinationsSection from "../features/destinations/DestinationsSection";

export default () => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllDestinationsQuery();

  let Content;
  let to;

  if (isLoading) {
    Content = <div>Loading ...</div>;
  } else if (isSuccess) {
  if(posts.length > 3){
  to = posts.slice(0, 3)
  }else {
  to = posts}
    Content = <DestinationsSection destinationsData={to} />;
  } else if (isError) {
    Content = <div>Something went wrong: {error.message}</div>;
  }

  return Content;
};
