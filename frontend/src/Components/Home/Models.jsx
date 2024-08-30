import helmet from "../../assets/img/helmet.png";
import helmetModel from "../../assets/img/helmetModel.jpg";
import coverPhoto from "../../assets/img/coverPhoto.jpg";
import coverPhoto2 from "../../assets/img/coverPhoto2.jpg";
import laneCover from "../../assets/img/laneCover.png";
const ModelsCarousel = () => {
  return (
    <>
      <div className="carousel rounded-box">
        <div className="carousel-item w-104 h-96">
          <img className="" src={helmet} alt="Helmet" />
        </div>
        <div className="carousel-item w-104 h-96">
          <img className="" src={helmetModel} alt="Helmet" />
        </div>
        <div className="carousel-item w-104 h-96">
          <img className="" src={coverPhoto} alt="Helmet" />
        </div>
        <div className="carousel-item w-104 h-96">
          <img className="rounded-r-2xl" src={laneCover} alt="Helmet" />
        </div>
        {/* <div className="carousel-item w-104 h-96">
          <img className="rounded-r-2xl" src={coverPhoto2} alt="Helmet" />
        </div> */}
      </div>
    </>
  );
};

export default ModelsCarousel;
