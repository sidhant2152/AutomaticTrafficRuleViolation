import { Link } from "react-router-dom";
import challanLOGO from "../../assets/img/CheckChallanLOGO.svg";
const CheckChallan = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="align-center justify-center">
        <img
          // src="https://www.carinfo.app/_next/static/media/rchero.b955c702.svg"
          src={challanLOGO}
          alt="Challan Logo"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center font-semibold">
          Check Challan
        </h2>
        <p className="text-center">
          This feature allows users to quickly verify if their vehicle has any
          pending challans by entering their vehicle number. The system will
          display details such as the presence of a challan, the amount to be
          paid, and the specific traffic rule that was violated. This feature
          ensures users are well-informed about their traffic violations and
          fines.
        </p>
        <div className="card-actions justify-center mt-4">
          {/* <button className="btn btn-primary">Check Now</button> */}
          <Link to="/challan" className="btn btn-primary">
            Check Challan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckChallan;
