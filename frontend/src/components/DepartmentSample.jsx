import React from 'react';
import { Link } from 'react-router-dom';

const DepartmentsCard = () => {
    const departments = [
        {
          id: 1,
          name: "Engineering",
          head: "John Doe",
          phone: "+1234567890",
          location: "Building A, Floor 3",
        },
        {
          id: 2,
          name: "Marketing",
          head: "Jane Smith",
          phone: "+0987654321",
          location: "Building B, Floor 1",
        },
        {
          id: 3,
          name: "Finance",
          head: "David Johnson",
          phone: "+1122334455",
          location: "Building C, Floor 2",
        },
        {
          id: 4,
          name: "Engineering",
          head: "John Doe",
          phone: "+1234567890",
          location: "Building A, Floor 3",
        },
        {
          id: 5,
          name: "Marketing",
          head: "Jane Smith",
          phone: "+0987654321",
          location: "Building B, Floor 1",
        },
        {
          id: 6,
          name: "Finance",
          head: "David Johnson",
          phone: "+1122334455",
          location: "Building C, Floor 2",
        },
        {
          id: 7,
          name: "Engineering",
          head: "John Doe",
          phone: "+1234567890",
          location: "Building A, Floor 3",
        },
        {
          id: 8,
          name: "Marketing",
          head: "Jane Smith",
          phone: "+0987654321",
          location: "Building B, Floor 1",
        },
        {
          id: 9,
          name: "Finance",
          head: "David Johnson",
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
                            <Link to={`/department/${department.id}`}>
                            <div className="object-cover object-center w-full hover:transform hover:scale-105 h-48 mx-auto rounded-lg dark:bg-gray-900  bg-gray-200 ">
                                    <div className="py-16 px-4">
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
