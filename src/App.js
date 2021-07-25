import React from 'react';
import Dashboard from './Dashboard';
import AuthPage from './AuthPage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class App extends React.Component {
 
    constructor(props){
        super(props); 
        this.state = {
        };
      }
   

 render()
 { 
     return (
       <Router>
          <div>
            <Switch>
                <Route exact path="/">
                  <AuthPage/>
                </Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
            </Switch>
          </div>
        </Router>
     ) 
   }
}



export default App
