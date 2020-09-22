import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import axios from "axios";
import {buildObject, useTextField} from "../hooks/FormHook";


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 48,
        width: "50%",
    },
    text: {
        marginTop: 12,
        marginBottom: 12
    }
}));

function PaymentForm(props) {
    const classes = useStyles();
    const membershipId = useTextField('', 'membershipId');
    const amount = useTextField('', 'amount');
    const desc = useTextField('', 'desc');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const transaction = buildObject(membershipId, amount, desc);
        axios.get(`http://localhost:5000/api/membership/${parseInt(transaction.membershipId)}`)
            .then(membership => {
                const account = membership.data.account;
                axios.post('http://localhost:5000/api/transaction/top', {
                    accountId: account.id,
                    amount: parseInt(transaction.amount),
                    description: transaction.desc
                }).then(res => console.log(res));
            });
    };

    return (
        <form className={classes.root} onSubmit={onSubmitHandler}>
            <TextField className={classes.text} {...membershipId} type="number" required label="Membership number"
                       variant="outlined"/>
            <TextField className={classes.text} {...amount} type="number" required label="Amount" variant="outlined"/>
            <TextField className={classes.text} {...desc} required label="Description" variant="outlined"/>
            <Button type='submit' variant="contained" color="primary">Top up</Button>
        </form>
    );
}

export default PaymentForm