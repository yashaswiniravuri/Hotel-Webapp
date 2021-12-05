
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
//components
import Home from "./hotel/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Dashboard from "./user/Dashboard";
import DashboardSeller from "./user/DashboardSeller";

function App() {
  return (
    <Router>    
      <Navbar/> 
      <ToastContainer/>  
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/dashboard/seller" component={DashboardSeller} />
        </Switch>
    </Router>
  );
}
export default App;
