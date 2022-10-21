import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {v1} from 'uuid';
import {DialogItem} from './dialogsItem/DialogsItem';
import {Message} from './messages/Messages';
import {ActionType, addMessageAC, changeNewMessageTextAC, DialogsType, MessageType, StateType} from '../redux/state';


type DialogsProps = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
    dispatch: (action: ActionType) => void

}


export const Dialogs = (props: DialogsProps) => {
    const addMessage = () => {
        debugger
        props.dispatch(addMessageAC(props.newMessageText))
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(changeNewMessageTextAC(e.target.value))
    }
    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <input key={props.newMessageText} value={props.newMessageText} onChange={onChangeHandler}/>
                <button onClick={addMessage}>send</button>
            </div>
        </div>
    );
};

