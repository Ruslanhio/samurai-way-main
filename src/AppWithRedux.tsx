import React from 'react';
import './App.css';
import {Header} from './componets/header/Header';
import {Navbar} from './componets/navbar/Navbar';
import {Profile} from './componets/profile/Profile';

import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';


import {DialogsContainer} from './componets/dialogs/DialogsContainer';

import {UsersContainer} from './componets/users/UsersContainer';
import {Users} from './componets/users/Users';


export const AppWithRedux = () => {

    // const profile = useSelector<AppRootStateType, ProfilePageType>(state=> state.profilePage)
    // let dialogs = useSelector<AppRootStateType, DialogsPageType>(state=>state.dialogsPage)
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route path="/profile" render={() => <Profile/>}/>
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/users" render={() => <UsersContainer />}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}


