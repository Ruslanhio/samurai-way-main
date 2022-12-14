import React from 'react';
import s from './Profile.module.css'

import ProfileInfo from './profileInfo/ProfileInfo';
import {PostsType} from '../redux/store';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';



type ProfileProps = {
    profile: PostsType[],
    // addPostCallback: () => void
    message: string

    // changeHandler: () => void
    // dispatch:(action: ActionType) => void

    // addPost: () => void
    // changeNewText: () => void

}

export const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}