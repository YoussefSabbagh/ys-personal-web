import { dataSkills } from '../data/skillsData';
const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="w-full text-center bg-gradient-to-tl from-black/50 via-yellow-500/10 to-black/50 pt-12"
    >
      <div className="max-w-[1240px] mx-auto h-full p-2 flex justify-center items-center">
        <div>
          <h2 className="title py-4 ">
            My <span className="text-yellow-700">Toolbox</span>
          </h2>
          <p className="text-xl md:text-2xl py-4 text-gray-700 ">
            The skills, tools and technologies I use to bring your products to
            life:
          </p>
          <div className="md:text-xl py-4 text-gray-600 sm:max-w-[70%] m-auto mb-10"></div>
        </div>
      </div>

      <div className="container max-w-[1240px] flex items-center justify-center flex-wrap gap-8 mx-auto p-12">
        {dataSkills.map((skill) => {
          return (
            <div key={skill.name} className="min-w-[6rem]">
              <div className="w-full h-full object-cover">
                <img src={skill.image} />
              </div>
              <p className="">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
