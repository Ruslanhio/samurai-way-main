import React from 'react';
import './App.css';
import {Header} from './componets/header/Header';
import {Navbar} from './componets/navbar/Navbar';
import {Profile} from './componets/profile/Profile';
import {Dialogs} from './componets/dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionType, StoreType} from './componets/redux/state';


export type AppPropsType = {
    store: StoreType
    // dispatch: (action:ActionType) => void
    /*state: StateType
    addPostCallback: (postMessage: string) => void
    changeNewTextCallback: (newText: string) => void*/
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile
                        profile={state.profilePage.posts}
                        message={state.profilePage.messageForNewPost}
                        dispatch={props.store.dispatch.bind(props.store)}
                        /*  changeHandler={props.store.changeNewPostText.bind(props.store)}*/
                        /* addPostCallback={props.store.addPost.bind(props.store)}*//>}/>
                    <Route path="/dialogs" render={() => <Dialogs
                        dialogs={state.dialogsPage.dialogs}
                        messages={state.dialogsPage.messages}
                        newMessageText={state.dialogsPage.NewMessageText}
                        dispatch={props.store.dispatch.bind(props.store)}/>}/>
                </div>

            </div>
        </BrowserRouter>
    )
}

export default App;
