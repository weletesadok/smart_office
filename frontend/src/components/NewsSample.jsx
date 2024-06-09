import { Link } from "react-router-dom";

const NewsSection = () => {
const newses = [
  {
    title: "Ethiopian Tourism: Exploring the Rich Cultural Heritage",
    image: "https://picsum.photos/seed/picsum1/1200/720",
    content:
      "Ethiopia is quickly becoming a top destination for travelers seeking a unique blend of culture, history, and natural beauty. From the ancient rock-hewn churches of Lalibela to the stunning landscapes of the Simien Mountains, Ethiopia offers a diverse array of attractions. Tourists can explore the bustling markets of Addis Ababa, visit the historic city of Axum, and experience traditional Ethiopian cuisine. Efforts to boost tourism include improving infrastructure, promoting sustainable travel practices, and showcasing the country's rich cultural heritage. With its warm hospitality and myriad of attractions, Ethiopia is poised to be a standout destination in Africa.",
  },
  {
    title: "Discover the Natural Wonders of Ethiopia",
    image: "https://picsum.photos/seed/picsum2/1200/720",
    content:
      "Ethiopia's natural wonders are a major draw for tourists seeking adventure and breathtaking scenery. The Danakil Depression, one of the hottest places on earth, offers an otherworldly landscape with colorful sulfur springs and vast salt flats. The Simien Mountains National Park, a UNESCO World Heritage Site, is home to unique wildlife such as the Gelada baboon and the Ethiopian wolf. Visitors can also explore the Blue Nile Falls, known locally as 'Tis Issat' or 'the Smoking Water,' which is one of the most spectacular waterfalls in Africa. These natural attractions highlight Ethiopia's diverse and stunning environments.",
  },
  {
    title: "Ethiopia's Cultural Festivals Attract Global Tourists",
    image: "https://picsum.photos/seed/picsum3/1200/720",
    content:
      "Ethiopia's vibrant cultural festivals are attracting tourists from around the world. Timkat, the Ethiopian Orthodox celebration of Epiphany, features colorful processions, traditional music, and dancing. Meskel, the Finding of the True Cross, is another major festival marked by large bonfires and communal gatherings. The Hidar Tsion festival in Axum commemorates the presence of the Ark of the Covenant and includes pilgrimages and religious ceremonies. These festivals offer visitors a unique opportunity to experience Ethiopia's rich cultural traditions and communal spirit. They are key highlights for anyone looking to immerse themselves in the local culture.",
  },
  {
    title: "Ethiopia's Coffee Tourism: From Farm to Cup",
    image: "https://picsum.photos/seed/picsum4/1200/720",
    content:
      "Ethiopia, the birthplace of coffee, offers an immersive coffee tourism experience that takes visitors from farm to cup. Coffee enthusiasts can visit the lush coffee-growing regions of Sidamo, Yirgacheffe, and Harar to learn about the traditional methods of coffee cultivation and processing. Tours often include visits to local farms, coffee ceremonies, and tastings of some of the finest coffee in the world. The coffee culture in Ethiopia is deeply rooted in daily life and offers a unique insight into the social and economic fabric of the country. This form of tourism not only delights coffee lovers but also supports local farmers and communities.",
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
          to="/news"
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
              src={news.image}
              alt="Card img"
              className="object-cover object-center w-full h-48"
            />
            <div className="flex flex-grow">
              <div className="triangle"></div>
              <div className="flex flex-col justify-between px-4 py-6 bg-gray-200 dark:bg-gray-800 border  border-gray-400 dark:border-gray-700 text-black dark:text-gray-300">
                <div>
                  <Link
                    to="/news"
                    className="block mb-4 text-2xl font-black leading-tight hover:underline text-gray-600 dark:text-white dark:hover:text-[#ba936f] hover:text-gray-800"
                  >
                    {news.title}
                  </Link>
                  <p className="mb-4">{trimContent(news.content)}</p>
                </div>
                <div>
                  <Link
                    to="/news"
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
