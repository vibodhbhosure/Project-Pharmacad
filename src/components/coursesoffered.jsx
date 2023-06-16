import React from 'react';

const CoursesOffered = () => {
  const courses = [
    { headiing:'CAT / MAT / CET / NMAT / XAT +', name: 'MBA Entrance Exam-', description: 'Prepare for India’s top MBA entrance exams (CAT | MAT | CET | NMAT | XAT etc.) with our experienced alumnus support from top B-schools across India like IIM, Goa Institute of Management, NMIMS and Welingkar Institute of Management etc.' },
    { headiing:'GPAT / NIPER / NMIMS +', name: 'M. Pharmacy Entrance Exam-', description: 'Pharmacad is India’s best coaching academy for M. Pharmacy entrance exams (GPAT | NIPER | BITS | MANIPAL etc.) having online and offline teaching platforms. The entire programme is designed to enhance conceptual learning for students to help them crack all the entrance exams for M. Pharmacy.' },
    { headiing:'CAT / MAT / CET / NMAT / XAT +', name: 'Abroad Counselling-', description: 'Prepare for India’s top MBA entrance exams (CAT | MAT | CET | NMAT | XAT etc.) with our experienced alumnus support from top B-schools across India like IIM, Goa Institute of Management, NMIMS and Welingkar Institute of Management etc.' },
  ];

  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-8">
      <div className="flex flex-wrap items-center justify-between">
        <h1 className="text-4xl font-bold">Courses Offered</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 pb-2">
        {courses.map((course, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-md font-normal ">{course.headiing}</h3>
            <h3 className="text-xl font-bold mb-2">{course.name}</h3>
            <p className="mt-2 text-gray-700 mb-2">{course.description}</p>
            <a href="#" className="text-black font-semibold mt-4 inline-block">Learn More</a>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-left mt-8">
  <div className="justify-left md:flex md:justify-left">
    <button className="bg-indigo-700 hover:bg-sky-600 text-white py-2 px-4 rounded-md mr-4">
      View All Courses
    </button>
    <div className="mt-2 flex-col items-left md:flex-col md:items-left md:mt-2">
    <p className="text-semibold mb-2 md:mb-0">To book a free demo , <a href="#" className="text-black font-bold underline">
      Click here!
    </a></p>
    
  </div>
  </div>

</div>
    </div>
  );
}

export default CoursesOffered;
