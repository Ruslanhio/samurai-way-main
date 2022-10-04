import s from '../Dialogs.module.css';
import React from 'react';
// import {MessagesPropsType} from '../Dialogs';

type MessageProps = {
    message: string
    id: string
}

export const Message = (props: MessageProps) => {
    return  <div className={s.message}>{props.message}</div>
}
