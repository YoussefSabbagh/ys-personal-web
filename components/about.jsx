import Link from 'next/link';

import { FaEnvelope, FaFileDownload } from 'react-icons/fa';

// import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { GrDocumentUser } from 'react-icons/gr';

const AboutSection = () => {
  return (
    <section id="about" className="w-full text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center pt-12">
        <div>
          <h2 className="subtitle py-4 ">
            About <span className="text-yellow-700">Me</span>
          </h2>
          <h2 className="title py-4 ">
            <span className="text-yellow-700">Who</span> I am
          </h2>
          <div className="md:text-xl py-4 text-gray-600 sm:max-w-[70%] m-auto">
            <p>
              Hello! I enjoy creating things that live on the internet. My
              interest in web development started back in 2019 when I decided to
              build a blog to share some moments with my classmate at
              Universidad Central de Venezuela.
            </p>
            <p>
              I work to make a better web; one that is fast, easy to use,
              beautiful, accessible to all, and frustration-free. Regardless of
              your specific business requirements, in solving these challenges,
              you have a great chance of finding success online.
            </p>
            <p>
              My main experience is in front-end development, but I also have
              some experience as a backend developer and designer.
            </p>

            <p className="mb-10">
              Given that producing a modern website requires the combination of
              design, server technology, and the layer that users interact with,
              I believe having experience in both design and development allows
              for making the most optimal user experiences.
            </p>
          </div>
          <div className="flex justify-center space-x-4 mx-auto mb-20">
            <span className="text-center flex justify-center items-center space-x-2 cursor-pointer bg-yellow-700 px-4 py-2 rounded-full hover:text-white hover:bg-purple max-w-max">
              <a download href="/pdfs/ys_cv.pdf">
                Download CV
                <FaFileDownload className="md:text-xl lg:text-2xl inline ml-2" />
              </a>
            </span>
            <Link href="/contact" passHref>
              <span className="text-center flex justify-center items-center space-x-4 cursor-pointer bg-purple px-4 py-2 rounded-full text-white hover:bg-yellow-700 max-w-max">
                Contact Me
                <FaEnvelope className="md:text-xl lg:text-2xl inline ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
