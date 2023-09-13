import React from "react";
import "./assets/css/style.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import routes from "./utils/routes";
import Navebar from './assets/js/Navebar';

export default function App() {
    return <Router>
        <div>
        <Navebar/>
        </div>
         <Routes>
        {
           
            routes.map((route)=>(
                
                <Route 
                key={route.id}
                path={route.path} 
                element={route.component} />
           
            ))
            
        }
        </Routes>
        
    </Router>

}


