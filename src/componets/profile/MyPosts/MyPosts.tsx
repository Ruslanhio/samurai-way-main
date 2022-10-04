import s from '../Profile.module.css';
import React from 'react';
import {Post} from './Post/Post';
import {v1} from 'uuid';
import {PostsType, StateType} from '../../redux/state';



export type MyPostsProps = {
    posts: PostsType[]
}


export const MyPosts  = ( props: MyPostsProps) => {
    let postsElements = props.posts.
    map(p=> <Post message={p.message} likesCount={p.likesCount} />)
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <input/>
            </div>
            <div>
                <button> add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}