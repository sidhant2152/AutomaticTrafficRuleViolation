const TextInput = () => {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">Vehicle Number</span>
        {/* <span className="label-text-alt">Top Right label</span> */}
      </div>
      <input
        type="text"
        placeholder="Vehicle Number"
        className="input input-bordered w-full max-w-xs"
      />
      {/* <div className="label">
        <span className="label-text-alt">Bottom Left label</span>
        <span className="label-text-alt">Bottom Right label</span>
      </div> */}
    </label>
  );
};

export default TextInput;
