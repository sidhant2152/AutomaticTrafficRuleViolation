import TextInput from "../../Components/UI/TextInput";
const CheckChallan = () => {
  return (
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
  );
};

export default CheckChallan;
