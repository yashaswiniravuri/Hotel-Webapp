import { toast } from 'react-toastify';
import { login } from '../actions/auth';
import { useState } from "react";
import LoginForm from "../components/LoginForm";
import { useDispatch } from 'react-redux';

const Login = ({ history }) => {
    const [email, setEmail] = useState("yashu@gmail.com");
    const [password, setPassword] = useState("yashaswini");
const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('SEND LOGIN DATA', { email, password });
        try {
            let res = await login({ email, password })

            if (res.data) {
                console.log('SAVE USER RES IN REDUX AND LOCAL STORAGE THEN REDIRECT ==>');

                //save user and token to local storage
                window.localStorage.setItem('auth', JSON.stringify(res.data));
                //save user and token to redux
                dispatch({
                    type: "LOGGED_IN_USER",
                    payload: res.data,
                });
                history.push('/dashboard')
            }


        } catch (err) {
            console.log(err);
            if (err.response.status === 400) toast.error(err.response.data);

        }
    };
    return (
        <>
            <div className="container-fluid h1 text-center my-1 bg-light">Login page</div>;

            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <LoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleSubmit={handleSubmit} />

                    </div>
                </div>
            </div>
        </>
    )
};
export default Login;