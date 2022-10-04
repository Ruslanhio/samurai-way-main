import React from "react";
import s from './Post.module.css'


type messageProps = {
    message: string
    likesCount: number

}

export const Post = (props: messageProps ) => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUea8_21ROzckWIh_sDbVXY1Jz9rk2vyJBBA&usqp=CAU"/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )
}