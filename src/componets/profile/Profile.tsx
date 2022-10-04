import React from 'react';
import s from './Profile.module.css'
import {MyPosts, MyPostsProps} from './MyPosts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';
import {v1} from 'uuid';
import {PostsType, StateType} from '../redux/state';

type ProfileProps = {
    profile: PostsType[]
}

export const Profile = (props:ProfileProps) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.profile}/>
        </div>
    )
}