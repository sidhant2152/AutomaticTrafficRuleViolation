import shashiIMG from "../../../src/assets/img/ShashikalaIMG.jpg";
import sunilIMG from "../../../src/assets/img/sunilKumarIMG.jpg";

const AboutMentor = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card w-5/6 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl mb-6 text-center font-semibold">
          Our Supervisors
        </h2>
        <div className="grid grid-cols-10 gap-6 items-start">
          <div className="col-span-4 flex flex-col items-center ">
            <div className="flex flex-col items-center">
              <img
                src={shashiIMG}
                alt="Shashikala Tapaswi"
                className="w-48 h-48 rounded-lg shadow-md object-cover"
              />
              <p className="text-center font-bold mt-2">
                Prof. Shashikala Tapaswi
              </p>
            </div>
            <div className="flex flex-col items-center mt-4">
              <img
                src={sunilIMG}
                alt="Sunil Kumar"
                className="h-48 w-48 rounded-lg shadow-md object-cover"
              />
              <p className="text-center font-bold mt-2">Dr. Sunil Kumar</p>
            </div>
          </div>
          <div className="col-span-6 flex items-center">
            <p className="text-justify leading-7">
              We are highly indebted to Prof. Shashikala Tapaswi and Dr. Sunil
              Kumar, for their esteemed mentorship, and for allowing us to
              freely explore and experiment with various ideas in the course of
              making this project a reality. The leeway we were given went a
              long way towards helping cultivate a genuine hunger for knowledge
              and keeping up the motivation to achieve the best possible
              outcome. We can genuinely say that this Bachelor’s Thesis Project
              (BTP) made us explore many areas of machine learning that are new
              to us, and kindled an interest to further follow up on some of
              those areas. Moreover, the semi-successful completion of this
              project has brought with it great satisfaction and more
              importantly, confidence in our ability to produce more
              high-quality non-trivial artificial intelligence systems that can
              make a difference in the real-world. I would like to sincerely
              express my gratitude to this prestigious institution for providing
              us and my colleagues with the opportunity to pursue this BTP. It
              is an honor to be able to work on such an important academic
              project under the guidance and support we are provided with. We
              are grateful for the resources and facilities provided by this
              institution, which have been instrumental in enabling us to
              conduct our research and complete this project. Moreover, we
              deeply appreciate the efforts of my professors in mentoring and
              fairly evaluating our works.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMentor;
