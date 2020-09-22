import React, {useState} from "react";
import RegisterForm from "../forms/RegisterForm";
import "../shared/styles/Register.css"
import {Redirect} from "react-router-dom";

export default function Registration() {
    const [client, setClient] = useState();

    const onRedirectHandler = (client) => {
        setClient(client)
    }

    return (
        <div className='wrapper'>
            <RegisterForm onRedirectHandler={onRedirectHandler}/>
            {(client) ?
                <Redirect from="/register" to={`/info/client/${client.id}`} endpoint={'client'} id={client.id}/> : ''}
        </div>
    );
}
