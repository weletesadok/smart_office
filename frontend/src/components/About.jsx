import React from "react";

const About3 = () => {
  return (
    <div className="2xl:container dark:opacity-[0.7] dark:bg-[#223547] bg-gray-100 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 dark:opacity[0.9]">
      <p className="font-normal text-sm leading-3 text-indigo-700 hover:text-indigo-800 dark:text-yellow-500 cursor-pointer pb-2">
        About
      </p>
      <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
        <div className="w-full lg:w-6/12">
          <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 dark:text-white leading-9">
            Welcome to the Ethiopian Ministry of Tourism
          </h2>
          <p className="font-normal text-base leading-6 dark:text-[whitesmoke] text-gray-600 mt-6">
            The Ethiopian Ministry of Tourism is dedicated to promoting Ethiopia
            as a top travel destination. Our mission is to showcase the rich
            cultural heritage, stunning landscapes, and warm hospitality of our
            country. We work tirelessly to enhance the tourism experience and
            create sustainable growth for the benefit of all Ethiopians.
          </p>
        </div>
        <div className="w-full lg:w-6/12">
          <img
            className="lg:block hidden w-full"
            src="https://plus.unsplash.com/premium_photo-1670552850947-fd19a9a712f8?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ethiopian landscape"
          />
          <img
            className="lg:hidden sm:block hidden w-full"
            src="https://plus.unsplash.com/premium_photo-1670552850947-fd19a9a712f8?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ethiopian landscape"
          />
          <img
            className="sm:hidden block w-full"
            src="https://plus.unsplash.com/premium_photo-1670552850947-fd19a9a712f8?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ethiopian landscape"
          />
        </div>
      </div>

      <div className="relative mt-24">
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <div className="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 5V21"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 5V14"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 4.99984C5.93464 4.08371 7.19124 3.57056 8.5 3.57056C9.80876 3.57056 11.0654 4.08371 12 4.99984C12.9346 5.91598 14.1912 6.42913 15.5 6.42913C16.8088 6.42913 18.0654 5.91598 19 4.99984"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 14.0001C5.93464 13.084 7.19124 12.5708 8.5 12.5708C9.80876 12.5708 11.0654 13.084 12 14.0001C12.9346 14.9162 14.1912 15.4294 15.5 15.4294C16.8088 15.4294 18.0654 14.9162 19 14.0001"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <svg
            className="z-20"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="24" fill="#1F2937" />
            <path
              d="M26 15V19C26 19.2652 26.1054 19.5196 26.2929 19.7071C26.4804 19.8946 26.7348 20 27 20H31"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M31 30V31C31 31.5304 30.7893 32.0391 30.4142 32.4142C30.0391 32.7893 29.5304 33 29 33H19C18.4696 33 17.9609 32.7893 17.5858 32.4142C17.2107 32.0391 17 31.5304 17 31V30"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M30 26H33M15 26H18H15ZM22.5 26H25.5H22.5Z"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 22V17C17 16.4696 17.2107 15.9609 17.5858 15.5858C17.9609 15.2107 18.4696 15 19 15H26L31 20V22"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            className="z-20 sm:block hidden"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="24" fill="#1F2937" />
            <path
              d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-8 gap-4">
        <div>
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 dark:text-white dark:text-white text-gray-800 mt-6">
            Founded
          </p>
          <p className="font-normal text-base leading-6 dark:text-[whitesmoke] text-gray-600 mt-6">
            The Ethiopian Ministry of Tourism was established to develop and
            promote tourism in Ethiopia. Our goal is to attract visitors from
            around the world to experience the unique and diverse attractions
            our country has to offer.
          </p>
        </div>
        <div>
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 dark:text-white text-gray-800 mt-6">
            Mission
          </p>
          <p className="font-normal text-base leading-6 dark:text-[whitesmoke] text-gray-600 mt-6">
            Our mission is to foster sustainable tourism that benefits local
            communities, preserves cultural heritage, and protects the
            environment. We are committed to providing exceptional experiences
            for visitors and creating a thriving tourism industry in Ethiopia.
          </p>
        </div>
        <div>
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 dark:text-white text-gray-800 mt-6">
            Vision
          </p>
          <p className="font-normal text-base leading-6 dark:text-[whitesmoke] text-gray-600 mt-6">
            Our vision is to position Ethiopia as a leading tourist destination
            in Africa, celebrated for its rich cultural heritage, breathtaking
            landscapes, and sustainable tourism practices. We aspire to create
            unforgettable experiences for every visitor and drive economic
            growth through responsible tourism.
          </p>
        </div>
        <div className="sm:block hidden">
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 dark:text-white text-gray-800 mt-6">
            Values
          </p>
          <p className="font-normal text-base leading-6 dark:text-[whitesmoke] text-gray-600 mt-6">
            We believe in responsible tourism, community empowerment, and
            environmental stewardship. Our values guide our efforts to ensure
            that tourism in Ethiopia is inclusive, respectful, and sustainable
            for future generations.
          </p>
        </div>
        <div className="sm:hidden block">
          <div className="relative mt-8">
            <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
              <div className="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 5V21"
                    stroke="white"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 5V14"
                    stroke="white"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 4.99984C5.93464 4.08371 7.19124 3.57056 8.5 3.57056C9.80876 3.57056 11.0654 4.08371 12 4.99984C12.9346 5.91598 14.1912 6.42913 15.5 6.42913C16.8088 6.42913 18.0654 5.91598 19 4.99984"
                    stroke="white"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 14.0001C5.93464 13.084 7.19124 12.5708 8.5 12.5708C9.80876 12.5708 11.0654 13.084 12 14.0001C12.9346 14.9162 14.1912 15.4294 15.5 15.4294C16.8088 15.4294 18.0654 14.9162 19 14.0001"
                    stroke="white"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <svg
                className="z-20"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="24" fill="#1F2937" />
                <path
                  d="M26 15V19C26 19.2652 26.1054 19.5196 26.2929 19.7071C26.4804 19.8946 26.7348 20 27 20H31"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31 30V31C31 31.5304 30.7893 32.0391 30.4142 32.4142C30.0391 32.7893 29.5304 33 29 33H19C18.4696 33 17.9609 32.7893 17.5858 32.4142C17.2107 32.0391 17 31.5304 17 31V30"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30 26H33M15 26H18H15ZM22.5 26H25.5H22.5Z"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 22V17C17 16.4696 17.2107 15.9609 17.5858 15.5858C17.9609 15.2107 18.4696 15 19 15H26L31 20V22"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <svg
                className="z-20 sm:block hidden"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="24" fill="#1F2937" />
                <path
                  d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
            <div>
              <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
                Values
              </p>
              <p className="font-normal text-base leading-6 dark:text-[whitesmoke] text-gray-600 mt-6">
                We believe in responsible tourism, community empowerment, and
                environmental stewardship. Our values guide our efforts to
                ensure that tourism in Ethiopia is inclusive, respectful, and
                sustainable for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About3;
