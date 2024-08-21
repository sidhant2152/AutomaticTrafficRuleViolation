import { Link } from "react-router-dom";
const ViewModels = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">View All Models</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link to="/models" className="btn btn-primary">
            View Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewModels;
