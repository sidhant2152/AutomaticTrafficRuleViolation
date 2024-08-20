const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">E Challan</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Upload</a>
          </li>
          <li>
            <details>
              <summary>Models</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a className="text-nowrap">Model 1</a>
                </li>
                <li>
                  <a className="text-nowrap">Model 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
