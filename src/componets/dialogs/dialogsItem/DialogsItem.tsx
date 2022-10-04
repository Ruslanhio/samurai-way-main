import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';


type DialogsItemProps = {
    name: string
    id: string

}

    export const DialogItem = (props: DialogsItemProps) => {
        let path = '/dialogs/' + props.id
        return (
            <div className={`${s.dialogs} ${s.active}`}>
                {<NavLink to={path}>{props.name}</NavLink>}
            </div>
        )
    }


