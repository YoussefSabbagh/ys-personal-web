import { useState } from 'react';
import { FaBriefcase, FaCalendarAlt, FaGraduationCap } from 'react-icons/fa';
import EducationTimeline from './educationTimeline';
import WorkTimeline from './workTimeline';

const Qualification = () => {
  const [showWork, setShowWork] = useState(true);
  const [showEducation, setShowEducation] = useState(false);
  const handleShowWork = () => {
    setShowWork(true);
    setShowEducation(false);
  };

  const handleShowEducation = () => {
    setShowWork(false);
    setShowEducation(true);
  };

  return (
    <section
      id="qualification"
      className="antialiased text-gray-700 py-12 bg-gradient-to-tr from-black/80 via-yellow-500/20 to-black/80"
    >
      <h2 className="title py-4 text-center">Qualification</h2>
      <div className="subtitle py-4 space-x-16 flex justify-center items-center">
        <span
          onClick={handleShowEducation}
          className={` cursor-pointer subtitle transition duration-500 ${
            showEducation ? 'text-purple' : ''
          } `}
        >
          <FaGraduationCap className="inline h-6 w-6 md:h-10 md:w-10 mr-2 " />
          Education
        </span>
        <span
          onClick={handleShowWork}
          className={`cursor-pointer subtitle transition duration-500 ${
            showWork ? 'text-purple' : ''
          } `}
        >
          <FaBriefcase className="inline h-6 w-6 md:h-10 md:w-10 mr-2" />
          Work
        </span>
      </div>

      {showEducation && <EducationTimeline />}

      {showWork && <WorkTimeline />}
    </section>
  );
};

export default Qualification;
