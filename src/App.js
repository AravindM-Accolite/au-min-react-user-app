import React, {useEffect, useState, Fragment} from 'react';
import './App.css';
import UserList from "./components/user-list";
import ButtonAppBar from "./components/app-bar";
import Container from '@material-ui/core/Container';
import AddUser from "./components/add-user";

function App() {
    const initUsers = [];
    const [users, updateUsers] = useState(initUsers);
    const onUserUpdateClicked = (newUser) => {
        updateUsers([...users, newUser]);
    };

    // componentDidMount
    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(updateUsers);
        }, 3000);
    }, []);

    return (
        <div className="App">
            <ButtonAppBar/>
            {
                !!users.length ?
                <Fragment>
                    <Container maxWidth="md">
                        <UserList users={users}/>
                    </Container>
                    <Container>
                        <AddUser onUserUpdateClicked={onUserUpdateClicked}/>
                    </Container>
                </Fragment> :
                    <p>loading...</p>
            }
        </div>
    );
}

export default App;
