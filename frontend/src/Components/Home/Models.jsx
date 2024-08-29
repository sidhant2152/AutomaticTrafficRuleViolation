const ModelsCarousel = () => {
  return (
    <>
      <div className="carousel rounded-box">
        <div className="carousel-item w-96 h-96">
          <img
            className=""
            src="https://www.navhindtimes.in/wp-content/uploads/2022/04/Traffic.jpg"
            alt="traffic"
          />
        </div>
        <div className="carousel-item w-96 h-96">
          <img
            src="https://cdn.dnaindia.com/sites/default/files/2021/01/19/951066-traffic-violation.jpg?im=FitAndFill=(1200,900)"
            alt="model"
          />
        </div>
        <div className="carousel-item w-104 h-96">
          <img
            className="rounded-r-3xl"
            src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/09/18/868737-traffic-rules-violations-dna.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ModelsCarousel;
