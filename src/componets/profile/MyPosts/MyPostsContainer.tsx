import React from 'react';

import {addPostAC, changeNewPostTextAC} from '../../redux/profile-reducer';
import {ActionType, PostsType, StateType, StoreType} from '../../redux/store';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';


export type MyPostsProps = {
    posts: PostsType[]
    // addPostCallback: (postMessage: string) => void
    message: string
    // changeNewTextCallback: (newText: string) => void
    // dispatch: (action: ActionType) => void
    // addPost: () => void
    // changeNewText: (e: ChangeEvent<HTMLInputElement>) => void

}


/*export const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store: StoreType) => {
                let state = store.getState().profilePage
                /!* let postMessageRef = React.createRef<HTMLInputElement>()*!/
                const addPost = () => {
                    store.dispatch(addPostAC())
                }
                /!* if (postMessageRef.current) {*!/
                /!*props.addPostCallback(props.message)*!/


                const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    store.dispatch(changeNewPostTextAC(e.currentTarget.value))
                    // props.changeNewTextCallback(e.currentTarget.value)
                }
                return <MyPosts
                    posts={state.posts}
                    message={state.messageForNewPost}
                    addPost={addPost}
                    changeNewText={onChangeHandler}/>


            }
        }
    </StoreContext.Consumer>
}*/

let mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
    }
}
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addPost: () => dispatch(addPostAC()),
        changeNewText: (e: string) => dispatch(changeNewPostTextAC(e))
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)