// import type { NextPage } from 'next';
import Hero from '../components/hero';
import About from '../components/about';
import Skills from '../components/skills';
import Portfolio from '../components/portfolio';
import Qualifications from '../components/qualification';
import { getAllProjects } from '../services/projects';

// const Home: NextPage = (projects) => {
const Home = (projects) => {
  return (
    <main className="min-h-1/2">
      <Hero />
      <About />
      <Skills />
      <Portfolio projects={projects.projects} />
      <Qualifications />
    </main>
  );
};

export default Home;

export const getStaticProps = async () => {
  const projects = (await getAllProjects()) || [];

  return {
    props: { projects },
    revalidate: 10,
  };
};
