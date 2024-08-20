import ModelsCarousel from "../../Components/Home/Models";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl">Info about project</h1>
      <ModelsCarousel />
    </div>
  );
};

export default HomePage;
