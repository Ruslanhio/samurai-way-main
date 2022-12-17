import {v1} from 'uuid';
import {addPostAC, profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {followAC, setUsersAC, unfollowAC, usersReducer} from './users-reducer';


 type MessageType = {
    id: string
    message: string
}

 type DialogsType = {
    id: string
    name: string
    avatar: string
}

export type PostsType = {
    id: string
    message: string
    likesCount: number
}

 type UsersType = {
    id: string
    photoUrl: string
    name: string
    followed: boolean
    status: string
    address: AddressType
}

export type AddressType = {
    country: string
    city: string
}


export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostsType>
}
export type DialogsPageType = {
    newMessageText: string
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

 type UsersPageType = {
    users: Array<UsersType>

}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersPageType
}

export type StoreType = {
    _state: StateType
    subscribe: (callback: () => void) => void
    _onChange: () => void
    /* addPost: (postMessage: string) => void
     changeNewPostText: (newText: string) => void*/
    getState: () => StateType
    dispatch: (action: ActionType) => void
}


export type ActionType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof changeNewMessageTextAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>


// export const addPostAC = (postMessage: string) =>
//     ({type: 'ADD_POST', postMessage: postMessage} as const)

export const changeNewPostTextAC = (newText: string) =>
    ({
        type: 'CHANGE_NEW_POST_TEXT', newText: newText
    } as const)

export const addMessageAC = (/*newMessage: string*/) => ({
    type: 'ADD_MESSAGE' /*newMessage: newMessage*/
} as const)

export const changeNewMessageTextAC = (updateMessageText: string) => ({
    type: 'CHANGE_NEW_MESSAGE_TEXT',
    updateMessageText: updateMessageText
} as const)

/*export const setUsersAC = (users: Array<UsersType>) => ({
    type: 'SET-USERS', users: users
}as const)*/




/*export const followAC = (followed: boolean) => ({
    type: 'FOLLOW', followed: followed
} as const)*/


/*export const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: 'It-Incubator',
            posts: [
                {id: v1(), message: 'Hi, how are you?', likesCount: 15},
                {id: v1(), message: 'So good', likesCount: 26}
            ]
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: 'Ruslan'},
                {id: v1(), name: 'Dmitry'},
                {id: v1(), name: 'Evgeniy'},
                {id: v1(), name: 'Kseniya'},
                {id: v1(), name: 'Andrew'}
            ],
            newMessageText: 'Hello',
            messages: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'How is your it-incubator?'},
                {id: v1(), message: 'Yo'},
                {id: v1(), message: 'Yo'},
                {id: v1(), message: 'Yo'},
            ],
        },*/





        // sidebar: {}
  /*  },
    subscribe(callback) {
        this._onChange = callback
    },*/
    /* addPost(postMessage: string) {
         const newPost: PostsType = {
             id: v1(),
             message: postMessage,
             likesCount: 2
         }
         this._state.profilePage.posts.push(newPost) // ----> ??? для чего здесь push
         this._state.profilePage.messageForNewPost = ''
         this._onChange()
     },*/
  /*  _onChange() {
        console.log('hello')
    },*/
    /*changeNewPostText(newText: string)  {
        this._state.profilePage.messageForNewPost = newText
       this._onChange()
    },*/
   /* getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        // this._state.usersPage = usersReducer(this._state.usersPage, action)
        this._onChange()*/
        /* if (action.type === 'ADD-POST') {
             const newPost: PostsType = {
                 id: v1(),
                 message: action.postMessage,
                 likesCount: 2
             }
             this._state.profilePage.posts.push(newPost) // ----> ??? для чего здесь push
             this._state.profilePage.messageForNewPost = ''
             this._onChange()
         } else if (action.type === 'CHANGE-NEW-POST-TEXT') {
             this._state.profilePage.messageForNewPost = action.newText
             this._onChange()
         }
         if (action.type === 'ADD-MESSAGE') {
             let newMessage = this._state.dialogsPage.NewMessageText
             this._state.dialogsPage.messages.push({id: v1(), message: newMessage})
             this._state.dialogsPage.NewMessageText = ''
             this._onChange()
         } else if (action.type === 'CHANGE-NEW-MESSAGE-TEXT') {
             this._state.dialogsPage.NewMessageText = action.updateMessageText
             this._onChange()
         }*/
//     }
// }







