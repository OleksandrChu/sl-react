import React from "react";
import {useServerData} from "../hooks/ApiHook";
import InfoSection from "../information/InfoSection";
import {connect} from "react-redux";

const defaultState = {
    firstName: "",
    lastName: "",
    phone: "",
    memberShip: {
        type: 0,
        account: {
            balance: 0,
            debt: 0
        },
        services: [],
        expirationDate: new Date()
    }
};

function Client(props) {
    const {firstName, lastName, phone, memberShip} = useServerData(`http://localhost:5000/api/client/${props.match.params.id}`, defaultState)

    const getMembershipNameByType = (type) => {
        const value = props.types.find(el => el.value === type)
        return (value) ? value.name : ''
    }

    return (
        <div>
            <InfoSection
                details={{
                    "FirstName": firstName,
                    "LastName": lastName,
                    "Phone": phone
                }}
                title={"Client"}/>
            <InfoSection
                details={{
                    "Balance": memberShip.account.balance,
                    "Debt": memberShip.account.debt
                }}
                title={"Account"}/>
            <InfoSection
                details={{
                    "Membership type": getMembershipNameByType(memberShip.type),
                    "Expiration date": new Date(memberShip.expirationDate).toLocaleDateString('en-Us')
                }}
                title={"Membership"}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        types: state.registration.types
    }
}

export default connect(mapStateToProps)(Client)