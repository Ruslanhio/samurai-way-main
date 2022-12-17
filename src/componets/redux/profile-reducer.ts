import {v1} from 'uuid';
import {ActionType, PostsType, ProfilePageType} from './store';


/*export type ActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewPostTextAC>*/


const initialState: ProfilePageType = {
        messageForNewPost: 'It-Incubator',
        posts: [
            {id: v1(), message: 'Hi, how are you?', likesCount: 15},
            {id: v1(), message: 'So good', likesCount: 26}
        ]
}


export const profileReducer = (state = initialState, action: ActionType): ProfilePageType => {

    switch (action.type) {
        case 'ADD_POST' : {
            const newPost: PostsType = {
                id: v1(),
                message: state.messageForNewPost,
                likesCount: 2
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                messageForNewPost: ''

            }


        }
        case 'CHANGE_NEW_POST_TEXT' : {
            return {
                ...state,
                messageForNewPost: action.newText
            }

        }
        default :
            return state
    }
}
export const addPostAC = (/*postMessage: string*/) =>
    ({type: 'ADD_POST'/*, postMessage: postMessage*/} as const)

export const changeNewPostTextAC = (newText: string) =>
    ({type: 'CHANGE_NEW_POST_TEXT', newText: newText} as const)


