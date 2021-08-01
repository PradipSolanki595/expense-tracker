import React from 'react';
import App from "./App";
import GoogleLogin from 'react-google-login';
import { useHistory} from "react-router-dom";

function AuthPage(props) {
 
    let history = useHistory();

    function onSuccess(response) {
        var x = response.profileObj
        localStorage.setItem('user', JSON.stringify(x));
        history.push("/dashboard");

    }

     return (
         <div className = "login">
             <div>
            <GoogleLogin
                clientId="601813199582-kp9cvkcmt2hb0q6183qe2fsh4ocavtur.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={() => {history.push("/");}}
                cookiePolicy={'single_host_origin'}
            />,
            </div>
        </div>
     ) 

 }





export default AuthPage
