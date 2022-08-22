import { FaCalendarAlt } from 'react-icons/fa';
import educationData from '../data/educationData';

const EducationTimeline = () => {
  return (
    <article className="">
      <div className="relative container mx-auto px-6 flex flex-col space-y-8 ">
        <div className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>

        {educationData.map((data, index) => {
          return (
            <div key={index} className="relative z-10 ">
              <img src={data.image} alt="" className="timeline-img" />
              <div
                className={`timeline-container ${
                  index % 2 !== 0 ? '' : 'md:timeline-container-left'
                } `}
              >
                <div
                  className={`timeline-pointer ${
                    index % 2 !== 0 ? '' : 'timeline-pointer-left'
                  } `}
                  aria-hidden="true"
                ></div>
                <div className="bg-gray-100 p-6 rounded-md shadow-md">
                  <p
                    className={`font-bold text-indigo-600 text-sm tracking-wide ${
                      index % 2 === 0 ? 'text-left' : 'md:text-right'
                    } `}
                  >
                    {data.type}
                  </p>
                  <div className={`${index % 2 !== 0 ? '' : 'md:text-right'} `}>
                    <h3 className="text-xl font-bold pt-1">{data.title}</h3>
                    <h3 className="text-xl pt-1">{data.school}</h3>

                    <span>
                      <FaCalendarAlt className="inline h-4 w-4 mr-2" />
                      {data.dateStart} - {data.dateEnd}
                    </span>

                    <p className="pt-1 ">{data.comments}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default EducationTimeline;
