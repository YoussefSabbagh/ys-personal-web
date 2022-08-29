import Link from 'next/link';
import moment from 'moment';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { getProjectById } from '../../services/projects';

const ProjectDetails = ({ project }) => {
  return (
    <section className="bg-gradient-to-tl from-yellow-500/60 via-black/40 to-yellow-500/60 relative pt-32">
      <div className="container mx-auto min-h-[calc(100vh-var(--header-height))]  md:pt-0 px-6 z-10 flex flex-col items-center">
        <h1 className="font-light text-center text-4xl lg:text-5xl text-gray-700 mb-8">
          {project.name}
        </h1>
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start relative">
          <div className="w-full mb-16 md:mb-8 text-center lg:text-left">
            <div className="text-xl mb-4 pr-4">
              <p className="text-2xl text-center mb-4 font-semibold">
                Description
              </p>
              <p className="font-semibold mb-4"> {project.desc}</p>
              <div className="font-light text-left text-xl mt-8 lg:mt-0 mb-4 text-gray-700">
                <p className=""> {project.categoria}</p>

                <p className="">
                  Fecha: {moment(project.fecha).format('MMM YYYY')}
                </p>
              </div>
              <RichText content={project.descripcion.raw.children} />
            </div>

            <div className="mt-10 text-center">
              <Link href="/#portfolio" replace>
                <a className="px-2 py-2 w-36 font-light transition ease-in duration-200 hover:bg-yellow-700 border-2 text-lg border-gray-700 bg-yellow-500 focus:outline-none">
                  Regresar
                </a>
              </Link>
            </div>
          </div>

          <div className="">
            <div className="bg-gray-500 flex flex-col justify-center items-center py-2">
              <p>Main tools used in the project</p>
              <div className="flex justify-center items-center space-x-4">
                {project.icons.map((icon, i) => {
                  return (
                    <div key={i - project.name} className="block w-10 h-10">
                      <img src={icon} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="block w-full mx-auto md:mt-0 relative max-w-md lg:max-w-2xl">
              <img src={project.image.url} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { projectId } = params;

  const project = await getProjectById(projectId);

  return {
    props: { project },
  };
};

export default ProjectDetails;
