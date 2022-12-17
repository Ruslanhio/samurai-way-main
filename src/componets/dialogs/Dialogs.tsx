import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './dialogsItem/DialogsItem';
import {Message} from './messages/Messages';

import {ActionType, DialogsPageType} from '../redux/store';


type DialogsProps = {
   /* dialogs: Array<DialogsType>
    messages: Array<MessageType>*/
    dialogsPage: DialogsPageType
    addMessage: () => void
    changeNewMessageText: (e: ChangeEvent<HTMLInputElement>) => void
    // newMessageText: string

}


export const Dialogs = (props: DialogsProps) => {
let state = props.dialogsPage
    const addMessage = () => {
        props.addMessage()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeNewMessageText(e)
    }
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    let messagesElements = state.messages.map(m => <Message key = {m.id} message={m.message} id={m.id}/>)
    return (
        <div  className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div  className={s.messages}>
                {messagesElements}
                <input  value={props.dialogsPage.newMessageText} onChange={onChangeHandler}/>
                <button onClick={addMessage}>send</button>
            </div>
        </div>
    );
};

