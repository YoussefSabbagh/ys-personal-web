import Link from 'next/link';

import {
  FaEnvelope,
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
      className="w-full h-screen text-center bg-gradient-to-tr from-black/50 via-yellow-500/10 to-black/50 "
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
            <div className="subtitle py-4 sm:max-w-[70%] m-auto">
              <p>
                Currently, I'm focused on building responsive front-end web
                applications, human-centered products at{' '}
                <a
                  className="text-yellow-700 hover:text-purple"
                  href="https://taguaradigital.com/"
                  target="_blank"
                >
                  Taguara Digital
                </a>
                .
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
            <Link href="/contact" passHref>
              <span className="mx-auto mt-12 text-center flex justify-center items-center space-x-4 cursor-pointer bg-yellow-700 px-4 py-2 rounded-full hover:text-white hover:bg-purple max-w-max">
                Contact Me
                <FaEnvelope className="md:text-xl lg:text-2xl inline ml-2" />
              </span>
            </Link>
          </div>
          <div className="hidden md:block bg-hero-pattern bg-cover bg-center "></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
