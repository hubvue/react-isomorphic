import React from "react";
import { Switch, Route,Link } from "react-router-dom";
import routes from "./routes";
import "./App.css";
import img from "./logo.svg";
const App = () => {
    return (
        <>
            <div className="header__logo">
                <img src={img} alt=""/>
            </div>
            <ul className="home-ul">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/news">News</Link></li>
            </ul>
            <Switch>
                {routes.map((route, idx) =>
                    <Route key={idx} {...route} />
                )}
            </Switch>
        </>
    )
}

export default App;