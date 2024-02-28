import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "./loginslice"
import { useSelector } from "react-redux";

const Dashboard = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <div className="header-box">
      <div>
        <h1>Welcome to Dashboard</h1>
      </div>
      <div className="options">
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to = {'/category'}>Categories</Link>
          <Link to={"/orders"}>Orders</Link>
          <Link to={"/cart"}>Cart</Link><br></br>
          {isAuthenticated && <button onClick={logoutHandler}>Logout</button>}
        </ul>
      </div>
    </div>
  );
};
export default Dashboard;