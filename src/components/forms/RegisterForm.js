import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import axios from "axios";
import {buildObject, useTextField} from "../hooks/FormHook";
import {useServerData} from "../hooks/ApiHook";


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

function setExpirations() {
    const currentDate = new Date();
    const half = format(new Date(currentDate.setMonth(currentDate.getMonth() + 6)))
    const year = format(new Date(currentDate.setFullYear(currentDate.getFullYear() + 1)))
    return [half, year];
}

const format = (date) => {
    const values = [date.getFullYear(), ('0' + date.getMonth()).slice(-2),('0' + date.getDate()).slice(-2)];
    return values.join('-')
}

function RegisterForm(props) {
    const memberships = useServerData('http://localhost:5000/api/membership/types', []);
    const classes = useStyles();
    const lastname = useTextField('', 'lastName');
    const firstName = useTextField('', 'firstname');
    const phone = useTextField('', 'phone');
    const membershipType = useTextField('', 'membershipType');
    const expirationDate = useTextField('', 'expirationDate');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const client = buildObject(firstName, lastname, phone, membershipType, expirationDate);
        axios.post('http://localhost:5000/api/register', client)
            .then(response => props.onRedirectHandler(response.data))
    };

    return (
        <form className={classes.root} onSubmit={onSubmitHandler}>
            <TextField className={classes.text} {...firstName} required label="Firstname" variant="outlined"/>
            <TextField className={classes.text} {...lastname} required label="Lastname" variant="outlined"/>
            <TextField className={classes.text} {...phone} required label="Phone" variant="outlined"/>
            <FormControl variant="outlined" className={classes.text}>
                <InputLabel id="type-label">Membership type</InputLabel>
                <Select
                    {...membershipType}
                    labelId="type-label"
                    label="Membership type">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {memberships.map((type, index) => <MenuItem key={index} value={type.value}>{type.name}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.text}>
                <InputLabel id="expiration-label">Expiration date</InputLabel>
                <Select
                    {...expirationDate}
                    type='date'
                    labelId="type-label"
                    label="Expiration date">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {setExpirations().map((date, index) => <MenuItem key={index} value={date}>{date}</MenuItem>)}
                </Select>
            </FormControl>
            <Button type='submit' variant="contained" color="primary">Create</Button>
        </form>
    );
}

export default RegisterForm