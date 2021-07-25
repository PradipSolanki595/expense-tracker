import React from 'react';
import App from "./App";
import GoogleLogin from 'react-google-login';
import { useHistory} from "react-router-dom";

function AuthPage() {
 
    let history = useHistory();

     return (
         <div>
            <GoogleLogin
                clientId="601813199582-kp9cvkcmt2hb0q6183qe2fsh4ocavtur.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={() => {history.push("/dashboard");}}
                onFailure={() => {history.push("/");}}
                cookiePolicy={'single_host_origin'}
            />,
        </div>
     ) 

 }





export default AuthPage
