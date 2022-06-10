import React from "react";
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
} from "react-router-dom";

import './App.css';
import Home from './routes/Home.jsx';
import About from './routes/About.jsx';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Switch>
        </Router>
    );
}

export default App;
