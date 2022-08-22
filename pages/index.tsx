import type { NextPage } from 'next';
import Hero from '../components/hero';
import About from '../components/about';
import Skills from '../components/skills';
import Portfolio from '../components/portfolio';
import Qualifications from '../components/qualification';
const Home: NextPage = () => {
  return (
    <main className="min-h-1/2">
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Qualifications />
    </main>
  );
};

export default Home;
