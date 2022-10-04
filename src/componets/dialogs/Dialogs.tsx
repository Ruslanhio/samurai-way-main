import React from 'react';
import s from './Dialogs.module.css'
import {v1} from 'uuid';
import {DialogItem} from './dialogsItem/DialogsItem';
import {Message} from './messages/Messages';
import {DialogsType, MessageType, StateType} from '../redux/state';





type DialogsProps = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}



export const Dialogs = (props: DialogsProps ) => {
    let dialogsElements = props.dialogs.
    map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.messages.
    map(m =>  <Message message={m.message} id={m.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

