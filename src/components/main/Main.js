import React from "react";
import {Route, Switch} from "react-router-dom";
import Registration from "../shared/Registration";
import Payment from "../shared/Payment";
import Statistics from "../shared/Statistics";
import ClientInformation from "../shared/ClientInformation";


function Main() {
    return (
        <main>
            <Switch>
                <Route path="/register" component={Registration}/>
                <Route path="/payment" component={Payment}/>
                <Route path="/info/client/:id" component={ClientInformation}/>
                <Route path="/info/transaction/:id" component={ClientInformation}/>
                <Route path="/statistics" component={Statistics}/>
            </Switch>
        </main>
    );
}

export default Main