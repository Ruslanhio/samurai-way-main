import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';
import {ActionType, PostsType, StoreType} from '../redux/store';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {Profile} from './Profile';



type ProfileProps = {
    // profile: PostsType[],
    // addPostCallback: () => void
    // message: string
    // changeHandler: () => void
    // dispatch:(action: ActionType) => void
    store: StoreType
    // addPost: () => void
    // changeNewText: () => void

}
/*

export const ProfileContainer = (props: ProfileProps) => {
    return (
        <div className={s.content}>
          <Profile store={props.store}/>
        </div>
    )
}*/
