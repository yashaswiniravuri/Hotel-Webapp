import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({ ...rest})=>{
   
    return (window.localStorage.getItem('auth'))? <Route { ...rest}/>:<Redirect to = "/login"/>;
}
export default PrivateRoute;