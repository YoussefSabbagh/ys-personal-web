import Link from 'next/link';
import moment from 'moment';
import { getContentFragment } from '../../services/utils/contentFragment';
import { getProjectById } from '../../services/projects';

const ProjectDetails = ({ project }) => {
  return (
    <section className="bg-gradient-to-tl from-yellow-500/60 via-black/40 to-yellow-500/60 relative overflow-hidden h-screen">
      <div className="container mx-auto h-screen pt-32 md:pt-0 px-6 z-10 flex items-center justify-between">
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-between items-center relative">
          <div className="w-full mb-16 md:mb-8 text-center lg:text-left">
            <h2 className="font-light font-sans text-center lg:text-left text-5xl lg:text-8xl md:mt-0 mb-8 text-red-500">
              under contruction
            </h2>
            <h1 className="font-light font-sans text-center lg:text-left text-4xl lg:text-5xl md:mt-0 text-gray-700">
              {project.name}
            </h1>
            <div className="font-light font-sans text-left text-xl mb-4 text-gray-700">
              <p className="">Stack : {project.categoria}</p>
              <p className=""> {project.desc}</p>

              <p className="">
                Fecha: {moment(project.fechacreatedAt).format('YYYY')}
              </p>
            </div>

            {project.descripcion.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemindex) =>
                getContentFragment(itemindex, item.text, item)
              );

              return getContentFragment(index, children, typeObj, typeObj.type);
            })}

            <Link href="/" replace>
              <a className="px-2 py-2 w-36 mt-16 font-light transition ease-in duration-200 hover:bg-yellow-700 border-2 text-lg border-gray-700 bg-yellow-500 focus:outline-none">
                Go back Homepage
              </a>
            </Link>
          </div>
          <div className="block w-full mx-auto md:mt-0 relative max-w-md lg:max-w-2xl">
            <img src={project.image.url} />
          </div>
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { projectId } = params;

  const project = await getProjectById(projectId);

  return {
    props: { project },
  };
}

export default ProjectDetails;
