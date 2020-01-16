import React, {Fragment, useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const AddUser = (({onUserUpdateClicked}) => {
    const [newName, onNewName] = useState('');
    const [newAge, onNewAge] = useState(0);
    return (
        <Fragment>
            <TextField id="standard-basic" label="Name" value={newName}
                       onChange={e => onNewName(e.currentTarget.value)}/>
            <TextField id="standard-basic" type="number" label="Age" value={newAge}
                       onChange={e => onNewAge(e.currentTarget.value)}/>
            <Button variant="contained" color="primary"
                    onClick={() => onUserUpdateClicked({name: newName, age: newAge})}>
                Add
            </Button>
        </Fragment>
    )
});

export default AddUser;