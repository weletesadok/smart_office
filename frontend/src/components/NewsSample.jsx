import { Link } from "react-router-dom";

const NewsSection = () => {
  const newses = [
    {
      title: "Breaking News: Market Hits Record Highs",
      content:
        "Today, the stock market reached new record highs as investors remain optimistic about the economic recovery. The S&P 500, Dow Jones, and Nasdaq all saw significant gains, with tech and healthcare stocks leading the charge. Analysts attribute the surge to positive economic data and ongoing stimulus efforts. Many believe this trend will continue as more businesses reopen and consumer spending increases. However, some caution that the market could experience volatility as uncertainties remain. Stay tuned for more updates on this developing story.",
    },
    {
      title: "Local Hero Saves Family from House Fire",
      content:
        "In a remarkable act of bravery, a local man rescued a family of four from a house fire late last night. Witnesses say the fire broke out around midnight, quickly engulfing the two-story home. The hero, who lives nearby, rushed into the burning building without hesitation, pulling the family to safety one by one. Firefighters arrived shortly after and managed to extinguish the blaze. The family is currently recovering in the hospital, and all are expected to make a full recovery. The community has praised the hero for his quick thinking and selflessness.",
    },
    {
      title: "New Tech Innovations Unveiled at Annual Conference",
      content:
        "At the annual Tech Innovators Conference, several groundbreaking technologies were unveiled that promise to revolutionize various industries. Among the highlights were a new AI-powered medical diagnostic tool, a sustainable energy solution using advanced solar cells, and a cutting-edge virtual reality platform for education. Industry leaders and tech enthusiasts alike were impressed by the potential of these innovations to solve real-world problems and improve lives. The conference continues through the weekend, featuring more presentations and discussions on the future of technology.",
    },
    {
      title: "City to Implement New Green Initiatives",
      content:
        "In an effort to combat climate change and promote sustainability, the city council has announced a series of new green initiatives. These include expanding public transportation options, increasing green spaces, and implementing stricter emissions regulations for local businesses. The council also plans to invest in renewable energy projects and promote energy efficiency in homes and buildings. These initiatives are expected to significantly reduce the city's carbon footprint and improve air quality. Residents are encouraged to participate in community workshops to learn more about how they can contribute to a greener future.",
    },
    {
      title: "Sports Update: Championship Game Results",
      content:
        "In an exciting conclusion to the championship series, the hometown team emerged victorious, securing the title with a last-minute goal. The game was a nail-biter, with both teams playing at their best and the score remaining tight throughout. Fans were on the edge of their seats as the clock wound down, erupting in cheers when the winning goal was scored in the final seconds. The team's coach praised the players for their hard work and determination, and celebrations are planned throughout the city to honor their achievement. Stay tuned for more details on the victory parade and festivities.",
    },
  ];

  const trimContent = (content, maxLength = 150) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + "...";
    }
    return content;
  };

  return (
    <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6 my-4 bg-white dark:bg-[#223547] dark:text-white opacity-[0.9]">
      <div className="flex flex-wrap items-center justify-between mb-8">
        <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl dark:text-white">
          News
        </h2>
        <Link
          to="/insights"
          className="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600 dark:text-blue-400 dark:hover:border-blue-400"
        >
          Go to news page
        </Link>
      </div>
      <div className="flex flex-wrap -mx-4">
        {newses.map((news, index) => (
          <div
            key={index}
            className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col news-card"
          >
            <img
              src="https://source.unsplash.com/random/400x300"
              alt="Card img"
              className="object-cover object-center w-full h-48"
            />
            <div className="flex flex-grow">
              <div className="triangle"></div>
              <div className="flex flex-col justify-between px-4 py-6 bg-gray-200 dark:bg-gray-800 border  border-gray-400 dark:border-gray-700 text-black dark:text-gray-300">
                <div>
                  <Link
                    to={`/news/${index}`}
                    className="block mb-4 text-2xl font-black leading-tight hover:underline text-gray-600 dark:text-white dark:hover:text-[#ba936f] hover:text-gray-800"
                  >
                    {news.title}
                  </Link>
                  <p className="mb-4">{trimContent(news.content)}</p>
                </div>
                <div>
                  <Link
                    to={`/news/${index}`}
                    className="inline-block pb-1 mt-2 text-base font-black  uppercase border-b border-transparent hover:border-blue-600 dark:hover:border-blue-400 text-gray-600 dark:text-white dark:hover:text-[#ba936f] hover:text-gray-800"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
