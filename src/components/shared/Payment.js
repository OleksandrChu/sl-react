import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import PaymentForm from "../forms/PaymentForm";

export default function Payment() {
    const [transaction, setTransaction] = useState();

    const onRedirectHandler = (client) => {
        setTransaction(client)
        console.log(client)
    }

    return (
        <div className='wrapper'>
            <PaymentForm onRedirectHandler={onRedirectHandler}/>
            {(transaction) ?
                <Redirect from="/register" to={`/info/account/${transaction.accountId}`} id={transaction.accountId}/> : ''}
        </div>
    );
}