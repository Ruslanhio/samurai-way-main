import s from '../Profile.module.css';
import React, {ChangeEvent} from 'react';
import {Post} from './Post/Post';
import {ActionType, addPostAC, changeNewPostTextAC, PostsType} from '../../redux/state';
import classes from './MyPosts.module.css'




export type MyPostsProps = {
    posts: PostsType[]
    // addPostCallback: (postMessage: string) => void
    message: string
    // changeNewTextCallback: (newText: string) => void
    dispatch: (action: ActionType) => void
}


export const MyPosts = (props: MyPostsProps) => {
    /* let postMessageRef = React.createRef<HTMLInputElement>()*/
    const addPost = () => {
        props.dispatch(addPostAC(props.message))
       /* if (postMessageRef.current) {*/
        /*props.addPostCallback(props.message)*/
    }

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
         props.dispatch(changeNewPostTextAC(e.currentTarget.value))
        // props.changeNewTextCallback(e.currentTarget.value)
    }
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    /*  let newText = props.posts.map(p=><div key = {p.id}>{p.message}</div>)*/
    return (
        <div className={classes.myPosts}>
            <h3>My posts</h3>
            <div>
                <input key={props.message} value={props.message} onChange={onChangeHandler}/>
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