import { Link } from "react-router-dom";

function AppMenu(props){
  return(
    <ul className="nav flex-column" >
      <li className="nav-item mt-5">
        <Link to="/DashBoard" className="nav-link mt-2"><i className="fas fa-home"></i></Link>
        <Link to="/Appointment" className="nav-link"><i className="far fa-calendar"></i></Link>
        <Link to="/administration" className="nav-link"><i className="far fa-file-alt"></i></Link>
        <Link to="/treatment" className="nav-link"><i className="fas fa-stethoscope"></i></Link>
        <Link to="/test" className="nav-link"><i className="fas fa-vial"></i></Link>
      </li>
    </ul>
  );
}

export default AppMenu;