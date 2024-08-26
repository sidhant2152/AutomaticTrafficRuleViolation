import { useState } from "react";
import TextInput from "../../Components/UI/TextInput";
import ChallanTable from "./ChallanTable";
import axios from "axios";
import Error from "../../Components/UI/Error";

// TODO: Integrate getChallanByVehicleId API

const CheckChallan = () => {
  const [challans, setChallans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [vehicleNo, setVehicleNo] = useState("");
  const [loading2, setLoading2] = useState(false);
  const [error2, setError2] = useState(null);

  const handleFetchChallans = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get("http://localhost:3000/api/v1/challans");
      setChallans(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setError(
        error.response.data.message ||
          "Something went wrong while fetching challans"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleVehicleNoChange = (e) => {
    setVehicleNo(e.target.value);
    setError2(null);
  };

  return (
    <div className="flex flex-col gap-8 py-8">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">Challan Details</h2>
          <p className="justify-center">
            After getting challan details you can further go for online payment
          </p>
          <div className="justify-center">
            <TextInput />
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Get Detail</button>
          </div>
        </div>
      </div>
      <div className="card shadow-xl ">
        <div className="card-body">
          <h2 className="card-title">All Challans</h2>
          <div className="card-actions justify-start mt-4">
            <button onClick={handleFetchChallans} className="btn">
              {loading ? "Loading" : "Fetch Challans"}
            </button>
          </div>
          {challans?.length > 0 && <ChallanTable data={challans} />}
          {error && <Error data={error} />}
        </div>
      </div>
    </div>
  );
};

export default CheckChallan;
