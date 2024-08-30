import { Link } from "react-router-dom";
import modelLOGO from "../../assets/img/modelLOGO.jpg";
const ViewModels = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={modelLOGO} alt="Model logo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center font-semibold">Models</h2>
        <p className="text-center">
          Our Vehicle Detection and Classification Models are the cornerstone of
          our system, utilizing the state-of-the-art YOLOv4 object detection
          algorithm to identify vehicles in real-time video streams. With an
          accuracy of 86%, it can classify vehicles into various categories,
          laying the groundwork for subsequent tracking and violation detection.
        </p>
        <div className="card-actions justify-center mt-4">
          <Link to="/models" className="btn btn-primary">
            View All Models
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewModels;
