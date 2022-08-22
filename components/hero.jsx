import Link from 'next/link';

import {
  FaGithub,
  FaLinkedinIn,
  FaRegEnvelope,
  FaRegFilePdf,
} from 'react-icons/fa';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { GrDocumentUser } from 'react-icons/gr';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full h-screen text-center bg-gradient-to-tr from-black/80 via-yellow-500/20 to-black/80"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="subtitle uppercase tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="title py-4 ">
            Hi, I&#39;m <span className="text-yellow-700">Youssef</span>
          </h1>
          <h2 className="py-2 text-gray-700 title">
            A Web <span className="text-yellow-700">Developer</span>
          </h2>
          <div className="subtitle py-4 text-gray-600 sm:max-w-[70%] m-auto">
            <p>
              <span className="text-yellow-700">From Caracas - Venezuela</span>{' '}
              to the World
            </p>
            <p>
              Currently, I'm focused on building responsive front-end web
              applications, human-centered products at{' '}
              <span className="text-yellow-700">Taguara Digital</span>.
            </p>
          </div>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/youssef-sabbagh/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="socialIcons">
                <FaLinkedinIn className="md:text-xl lg:text-2xl" />
              </div>
            </a>
            <a
              href="https://github.com/YoussefSabbagh"
              target="_blank"
              rel="noreferrer"
            >
              <div className="socialIcons">
                <FaGithub className="md:text-xl lg:text-2xl" />
              </div>
            </a>
            <Link href="/contact">
              <div className="socialIcons">
                <FaRegEnvelope className="md:text-xl lg:text-2xl" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
