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
    posts: Array<PostsType>
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export let state: StateType = {
    profilePage: {
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
        messages: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'How is your it-incubator'},
            {id: v1(), message: 'Yo'},
        ]
    }
}



