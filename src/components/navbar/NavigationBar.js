import React from "react";
import {NavLink} from "react-router-dom";

export default function NavigationBar() {
    return <header>
        <NavLink activeClassName="active" to="/register">Register</NavLink>
        <NavLink activeClassName="active" to="/payment">Payment</NavLink>
        <NavLink activeClassName="active" to="/edit">Edit</NavLink>
        <NavLink activeClassName="active" to="/statistics">Statistics</NavLink>
    </header>
}