import { useParams } from "react-router-dom";
import { data } from "./constants";
import { useEffect, useState } from "react";
import ChallanTable from "../Challan/ChallanTable";
import axios from "axios";

const randomWait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

const Model1 = () => {
  const { model } = useParams();

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  // For fetching challan table details
  const [challans, setChallans] = useState([]);
  // const [loading2, setLoading2] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setShow(false);
    setLoading(false);
    setChallans([]);
    setError(null);
  }, [model]);

  const handleFetchChallans = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get("http://localhost:3000/api/v1/challans");
      const allChallans = response.data.data;
      const filteredChallans = allChallans.filter((challan) => {
        return challan.challanCategory === data[model].filterTerm;
      });
      setChallans(filteredChallans);
      // console.log(response.data);
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

  const handleModelRun = async () => {
    setLoading(true);
    setShow(false);
    await randomWait(data[model].delay);
    await handleFetchChallans();
    setLoading(false);
    setShow(true);
  };

  return (
    <div>
      {/* Model Name */}
      <h1 className="text-5xl font-semibold my-8">{data[model].title}</h1>

      <div className="py-8">
        {/* Sample Video Text */}
        <h2 className="text-xl font-semibold mb-6 ">
          {data[model].videoHeading}
        </h2>
        {/* Raw Video */}
        <div className="w-2/4 mb-8 ">
          <video src={data[model].sampleVideo} controls></video>
        </div>

        {/* Run Model Button */}
        <div className="flex justify-center items-start">
          <button onClick={handleModelRun} className="btn btn-neutral mb-8">
            {loading ? "Processing..." : "Run Model"}
          </button>
        </div>
      </div>
      {show && (
        <div className="flex py-8 flex-col gap-4">
          {/* Processed Video */}
          <div>
            <h2 className="text-xl font-semibold mb-6">
              {data[model].processedVideoHeading}
            </h2>
            <div className="w-1/2">
              <video src={data[model].processedVideo} controls></video>
            </div>
          </div>
          {/* Snapshots */}
          <div>
            <h2 className="text-xl font-semibold mb-6">
              {data[model].ssHeading}
            </h2>
            <div className="flex flex-row gap-4 flex-wrap">
              {data[model].images.map((data, index) => (
                <div key={index}>
                  <img src={data} className="h-52 w-auto " />
                </div>
              ))}
            </div>
          </div>
          {/* Challan Table */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              {data[model].challanTableHeading}
            </h2>
            <ChallanTable data={challans} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Model1;
