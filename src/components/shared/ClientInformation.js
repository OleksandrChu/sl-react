import React from "react";
import {useServerData} from "../hooks/ApiHook";
import InfoSection from "../information/InfoSection";

const defaultState = {
    firstName: "",
    lastName: "",
    phone: "",
    memberShip: {
        account: {
            balance: 0,
            debt: 0
        },
        services: [],
        expirationDate: new Date()
    }
};

export default function ClientInformation(props) {
    const client = useServerData(`http://localhost:5000/api/client/${props.match.params.id}`, defaultState)
    return (
        <div>
            <InfoSection
                details={{
                    "FirstName": client.firstName,
                    "LastName": client.lastName,
                    "Phone": client.phone
                }}
                title={"Client"}/>
            <InfoSection
                details={{
                    "Balance": client.memberShip.account.balance,
                    "Debt": client.memberShip.account.debt
                }}
                title={"Account"}/>
            <InfoSection
                details={{
                    "Expiration date": new Date(client.memberShip.expirationDate).toLocaleDateString('en-Us')
                }}
                title={"Membership"}/>
        </div>
    );
}