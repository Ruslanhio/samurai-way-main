import {v1} from 'uuid';


export type MessageType = {
    id: string
    message: string
}

export type DialogsType = {
    id: string
    name: string
}

export type PostsType = {
    id: string
    message: string
    likesCount: number
}

export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostsType>
}
export type DialogsPageType = {
    NewMessageText: string
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
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

export const addPostAC = (postMessage: string) =>
    ({type: 'ADD-POST', postMessage: postMessage} as const)

export const changeNewPostTextAC = (newText: string) =>
    ({type: 'CHANGE-NEW-POST-TEXT', newText: newText} as const)

export const addMessageAC = (newMessage: string) => ({
    type: 'ADD-MESSAGE', newMessage: newMessage
} as const)

export const changeNewMessageTextAC = (updateMessageText: string) => ({
    type: 'CHANGE-NEW-MESSAGE-TEXT',
    updateMessageText: updateMessageText
} as const)


export const store: StoreType = {
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
            NewMessageText: 'Hello',
            messages: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'How is your it-incubator'},
                {id: v1(), message: 'Yo'},
                {id: v1(), message: 'Yo'},
                {id: v1(), message: 'Yo'},
            ]
        }
    },
    subscribe(callback) {
        this._onChange = callback
    },
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
    _onChange() {
        console.log('hello')
    },
    /*changeNewPostText(newText: string)  {
        this._state.profilePage.messageForNewPost = newText
       this._onChange()
    },*/
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
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
        }
    }
}







