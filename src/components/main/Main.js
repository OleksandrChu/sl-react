import React from "react";
import {Route, Switch} from "react-router-dom";
import Registration from "../shared/Registration";
import Payment from "../shared/Payment";
import Statistics from "../shared/Statistics";
import Client from "../shared/Client";
import Account from "../shared/Account";


function Main() {
    return (
        <main>
            <Switch>
                <Route path="/register" component={Registration}/>
                <Route path="/payment" component={Payment}/>
                <Route path="/info/client/:id" component={Client}/>
                <Route path="/info/account/:id" component={Account}/>
                <Route path="/statistics" component={Statistics}/>
            </Switch>
        </main>
    );
}

export default Main
