import React from 'react';
import './App.css';
import {Header} from './componets/header/Header';
import {Navbar} from './componets/navbar/Navbar';
import {Profile} from './componets/profile/Profile';

import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';
import {StoreType} from './componets/redux/store';
import {DialogsContainer} from './componets/dialogs/DialogsContainer';
import {UsersContainer} from './componets/users/UsersContainer';


export type AppPropsType = {
    store: StoreType
    // dispatch: (action:ActionType) => void
    /*state: StateType
    addPostCallback: (postMessage: string) => void
    changeNewTextCallback: (newText: string) => void*/
}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <>
                    <Route path="/profile" render={() => <Profile/>}/>

                    // {/*  message={state.profilePage.messageForNewPost}
                      //   dispatch={props.store.dispatch.bind(props.store)}
                      //   />}/>*/}
                    // {/* changeHandler={props.store.changeNewPostText.bind(props.store)}
                      //    addPostCallback={props.store.addPost.bind(props.store)}/>}/>*/}

                    <Route path="/dialogs" render={() => <DialogsContainer />}/>
                    <Route path="/users" render={() => <UsersContainer />}/>

                    </>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
