import ProductCard from './productCard';
import dataProjects from '../data/projectData';

const Portfolio = () => {
  return (
    <section id="portfolio" className="w-full text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center pt-12">
        <div>
          <h2 className="subtitle py-4 ">Portfolio</h2>
          <h2 className="title py-4 mb-12">
            Here are some of
            <span className="text-yellow-700"> my projects</span>
          </h2>
          <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 py-8">
            {dataProjects.map((project) => {
              return <ProductCard key={project.id} data={project} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
