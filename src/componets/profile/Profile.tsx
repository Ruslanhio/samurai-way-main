import React from 'react';
import s from './Profile.module.css'
import {MyPosts, MyPostsProps} from './MyPosts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';
import {v1} from 'uuid';
import {ActionType, PostsType} from '../redux/state';

type ProfileProps = {
    profile: PostsType[],
    // addPostCallback: (postMessage: string) => void
    message: string
    // changeHandler: (newText: string) => void
    dispatch:(action: ActionType) => void

}

export const Profile = (props:ProfileProps) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts dispatch={props.dispatch}  posts={props.profile} message={props.message}/>
        </div>
    )
}