import Subpage from "./Subpage.js";
import Constants from "../constants/SubpageConstants.js";

import Login from "../components/Login/Login.js";
import customersView from "../components/views/CustomersView.js";
import applicationsView from "../components/views/ApplicationsView.js";
import vehiclesView from "../components/views/VehiclesView.js";

const subpages = [
  /*new Subpage(Login, Constants.REACT_COMPONENT, "/", function(props) {
    return props.login === undefined ? "Log In" : "Log Out";
  }),*/
    new Subpage(Login, Constants.REACT_COMPONENT, "/", "Log In/Out"),
    new Subpage(customersView, Constants.FUNCTIONAL, "/Customers", "Customers"),
    new Subpage(vehiclesView, Constants.FUNCTIONAL, "/Vehicles", "Vehicles"),
    new Subpage(
    applicationsView,
    Constants.FUNCTIONAL,
    "/Applications",
    "Applications"
  )
];
export default subpages;
