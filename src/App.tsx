import React from 'react';
import './App.css';
import {Header} from './componets/header/Header';
import {Navbar} from './componets/navbar/Navbar';
import {Profile} from './componets/profile/Profile';
import  {Dialogs}  from './componets/dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {StateType} from './componets/redux/state';


export type AppPropsType = {
    state: StateType

}

const App: React.FC<AppPropsType> = (props)=> {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={()=><Profile profile={props.state.profilePage.posts}/>}/>
                    <Route path='/dialogs' render={()=> <Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>}/>

                </div>

            </div>
        </BrowserRouter>
    )
}

export default App;
