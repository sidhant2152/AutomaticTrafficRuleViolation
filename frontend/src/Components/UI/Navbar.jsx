import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          E Challan
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="btn btn-ghost">
            <details>
              <summary>Models</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <Link className="text-nowrap" to="/model1">
                    Speed Violation
                  </Link>
                </li>
                <li>
                  <Link to="/model2">Model 2</Link>
                </li>
                <li>
                  <Link to="/model3">Model 3</Link>
                </li>
                <li>
                  <Link to="/model4">Model 4</Link>
                </li>
                <li>
                  <Link to="/model5">Model 5</Link>
                </li>
              </ul>
            </details>
          </li>
          <li className="btn btn-accent ml-3">
            <Link to="/challan">Check Challan</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
