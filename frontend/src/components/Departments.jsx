import React from 'react';
import { Link } from 'react-router-dom';

const DepartmentsCard = () => {
    const departments = [
        {
          
            id: 1,
            name: "Minister's office",
            head: "Nasise",
            phone: "+1234567890",
            location: "Building A, Floor 12",
          },
          {
            id: 2,
            name: "Audit Executive	",
            head: "Nahom",
            phone: "+0987654321",
            location: "Building B, Floor 1",
          },
          {
            id: 3,
            name: "Women's; Children and Youth Inclusion Implementation Executive II",
            head: "Nahom",
            phone: "+1122334455",
            location: "Building C, Floor 2",
          },
          {
            id: 4,
            name: "Public relations and communication executive",
            head: "Yonas",
            phone: "+1234567890",
            location: "Building A, Floor 3",
          },
          {
            id: 5,
            name: "Chief Executive Officer II",
            head: "Nahom",
            phone: "+0987654321",
            location: "Building B, Floor 1",
          },
          {
            id: 6,
            name: "Executive of strategic affairs",
            head: "Yonas",
            phone: "+1122334455",
            location: "Building C, Floor 2",
          },
          {
            id: 7,
            name: "Institutional change team",
            head: "Yonas",
            phone: "+1234567890",
            location: "Building A, Floor 3",
          },
        {
          id: 8,
          name: "Executive Director of Policy and Strategy Research",
          head: "Yonas",
          phone: "+1122334455",
          location: "Building C, Floor 2",
        },
        {
          
          id: 9,
          name: "Procurement and Finance Executive II",
          head: "Yonas",
          phone: "+1234567890",
          location: "Building A, Floor 12",
        },
        {
          id: 10,
          name: "Competency and Human Resource Management Executive I	",
          head: "Nahom",
          phone: "+0987654321",
          location: "Building B, Floor 1",
        },
        {
          id: 11,
          name: "Information Communication Technology Executive",
          head: "Nahom",
          phone: "+1122334455",
          location: "Building C, Floor 2",
        },
        {
          id: 12,
          name: "Basic Services Executive II",
          head: "Yonas",
          phone: "+1234567890",
          location: "Building A, Floor 3",
        },
        {
          id: 13,
          name: "Executive Director of Tourism Fund",
          head: "Nahom",
          phone: "+0987654321",
          location: "Building B, Floor 1",
        },
        {
          id: 14,
          name: "Tourist services quality assurance and ranking executive",
          head: "Yonas",
          phone: "+1122334455",
          location: "Building C, Floor 2",
        },
        {
          id: 15,
          name: "Chief executive officer of the marketing department",
          head: "Yonas",
          phone: "+1234567890",
          location: "Building A, Floor 3",
        },
      {
        id: 16,
        name: "Tourism Promotion Executive",
        head: "Yonas",
        phone: "+1122334455",
        location: "Building C, Floor 2",
      },
      {
        id: 17,
        name: "Chief executive officer of the marketing department",
        head: "Yonas",
        phone: "+1234567890",
        location: "Building A, Floor 3",
      },
    {
      id: 18,
      name: "/Executive director of tourism attraction and product development",
      head: "Yonas",
      phone: "+1122334455",
      location: "Building C, Floor 2",
    },
    {
      id: 19,
      name: "Executive Director of Tourist Facility Construction and Infrastructure Expansion",
      head: "Yonas",
      phone: "+1122334455",
      location: "Building C, Floor 2",
    },
      ];

    return (
      <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6 my-4 bg-white dark:bg-[#223547] dark:text-white opacity-[0.9]">
            <h4 className="text-xl font-bold md:text-3xl text-center">Departments</h4>
            <p className="text-center">Explore departments</p>

            <div className="flex items-center justify-center">
                <div className="grid gap-8 my-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {departments.map((department, index) => (
                        <div key={index} className="w-full max-w-xs text-center">
                            {/* <Link to={`/departments/${department.id}`}></Link> */}
                            <Link to={`/departments`}>
                                <div className="object-cover object-center w-full hover:transform hover:scale-105 h-48 mx-auto rounded-lg dark:bg-gray-900  bg-gray-200 ">
                                    <div className="py-6 px-4">
                                        <h5 className="text-lg font-bold">{department.name}</h5>
                                        <p className="mt-1 font-medium">Head: {department.head}</p>
                                        <p className="mt-1 font-medium">Phone: {department.phone}</p>
                                        <p className="mt-1 font-medium">Location: {department.location}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DepartmentsCard;
