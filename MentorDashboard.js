import React from 'react'
import Sidebar from './Slidebar/Sidebar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutUs} from "./Slidebar/pages/AboutUs";
import './style.css'


function MentorDashboard() {
    return (
         <div>
             <Router>
      <Sidebar />
      <Switch>
        <Route path="/about-us" exact component={AboutUs} />
       
      </Switch>
    </Router>

        </div>
    );
}

export default MentorDashboard
