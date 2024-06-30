import { apiSlice } from "./../../app/api/apiSlice";
import Loading from "../../components/SkeletonLoading";

const feedbackSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFeedbacks: builder.query({
      query: () => "/feedback",
    }),
  }),
});

const { useGetFeedbacksQuery } = feedbackSlice;

const FeedbackItem = ({ email, phoneNumber, message }) => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-4">
    <h2 className="text-lg font-semibold mb-2">Email: {email}</h2>
    <p className="text-gray-600 mb-2">Phone: {phoneNumber}</p>
    <p className="text-gray-800">{message}</p>
  </div>
);

export default () => {
  const { data, isLoading, isSuccess } = useGetFeedbacksQuery();
  let content;
  if (isLoading) {
    content = <Loading />;
  }
  if (isSuccess) {
    content = (
      <div className="p-4">
        {data.map(feedback => (
          <FeedbackItem 
            key={feedback._id}
            email={feedback.email}
            phoneNumber={feedback.phoneNumber}
            message={feedback.message}
          />
        ))}
      </div>
    );
  }
  return content;
};
