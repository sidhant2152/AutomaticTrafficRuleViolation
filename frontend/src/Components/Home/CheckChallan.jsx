import { Link } from "react-router-dom";
const CheckChallan = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Check Challan</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
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
