import React, {useEffect, useState} from "react";
import {useServerData} from "../hooks/ApiHook";
import InfoSection from "../information/InfoSection";
import axios from "axios";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import makeStyles from "@material-ui/core/styles/makeStyles";

const defaultState = {
    balance: 0
};
const count = 2;

const useStyles = makeStyles((theme) => ({
    fab: {
        margin: 24
    }
}));

export default function Account(props) {
    const baseUrl = `http://localhost:5000/api/account/${props.match.params.id}`
    const [currentData, setCurrentData] = useState([])
    const [additionalData, setAdditionalData] = useState([])
    const account = useServerData(baseUrl, defaultState)

    useEffect(() => {
        console.log(true)
        axios.get(`${baseUrl}/transactions?offset=0&count=${count}`)
            .then(response => setCurrentData(response.data))
        axios.get(`${baseUrl}/transactions?offset=${count}`)
            .then(response => setAdditionalData(response.data))
    }, [baseUrl])

    const onclickHandler = () => {
        setCurrentData([...currentData, ...additionalData.slice(currentData.length - count, currentData.length)])
    }

    return (
        <div>
            <InfoSection
                details={{
                    "Balance": account.balance,
                }}
                title={"Account"}/>
            <h2>Transactions</h2>
            {
                currentData.map(t =>
                    <InfoSection
                        details={{
                            "Amount": t.amount,
                            "Description": t.description
                        }}/>)
            }
            <Fab
                className={useStyles().fab}
                type='button'
                onClick={onclickHandler}
                color="primary"
                aria-label="add">
                <AddIcon/>
            </Fab>
        </div>
    );
}