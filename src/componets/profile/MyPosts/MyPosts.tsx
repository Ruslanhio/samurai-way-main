import s from '../Profile.module.css';
import React, {ChangeEvent, FC, useState} from 'react';
import {Post} from './Post/Post';
import classes from './MyPosts.module.css'
import { PostsType} from '../../redux/store';




export type MyPostsProps = {
    posts: PostsType[]
    // addPostCallback: (postMessage: string) => void
    messageForNewPost: string
    // changeNewTextCallback: (newText: string) => void
    // dispatch: (action: ActionType) => void
    addPost: () => void
    changeNewText: (e: string) => void

}


export const MyPosts: FC<MyPostsProps> = (props) => {
    const addPost = () => {
        props.addPost()
        // props.dispatch(addPostAC(props.message))
       /* if (postMessageRef.current) {*/
        /*props.addPostCallback(props.message)*/
    }

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.changeNewText(e.currentTarget.value)
    }

    const postsElements =  props.posts.map((p,i )=> <Post key={i} message={p.message} likesCount={p.likesCount}/>)
    /*  let newText = props.posts.map(p=><div key = {p.id}>{p.message}</div>)*/
    return (
        <div className={classes.myPosts}>
            <h3>My posts</h3>
            <div>
                <input  value={props.messageForNewPost} onChange={onChangeHandler}/>
            </div>
            <div>
                <button onClick={addPost}> add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}