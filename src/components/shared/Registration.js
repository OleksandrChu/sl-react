import React, {useEffect, useState} from "react";
import RegisterForm from "../forms/RegisterForm";
import "../shared/styles/Register.css"
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {fetchMembershipTypes} from "../../store/registration/actions";
import axios from "axios";

function Registration(props) {
    const [redirect, setRedirectStatus] = useState(false)
    const [clientId, setClientId] = useState(0)
    const {fetchMembershipTypes, types} = props
    
    useEffect(() => {
        fetchMembershipTypes('http://localhost:5000/api/membership/types')
    }, [fetchMembershipTypes])

    const onCreateClient = client => {
        axios.post('http://localhost:5000/api/register', client)
            .then(response => {
                setClientId(response.data.id)
                setRedirectStatus(true)
            })
    }

    return (
        <div className='wrapper'>
            <RegisterForm types={types} onCreateClient={onCreateClient}/>
            {
                (redirect) ?
                    <Redirect from="/register" to={`/info/client/${clientId}`} endpoint={'client'} id={clientId}/>
                    : ''
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        types: state.registration.types,
        loaded: state.registration.loaded
    }
}

const mapActionsToProps = {
    fetchMembershipTypes
}

export default connect(mapStateToProps, mapActionsToProps)(Registration)
