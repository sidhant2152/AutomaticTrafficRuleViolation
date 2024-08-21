import ModelsCarousel from "../../Components/Home/Models";
import Functions from "../../Components/Home/Functions";
import InfoCard from "../../Components/Home/InfoCard";
import AboutMentor from "../../Components/Home/AboutMentor";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-5xl font-semibold my-4 text-center">
        Automatic Traffic Offence Detection
      </h1>
      <ModelsCarousel />
      <InfoCard />
      <Functions />
      <AboutMentor />
    </div>
  );
};

export default HomePage;
