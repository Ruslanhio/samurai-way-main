import {ActionType, DialogsPageType} from './store';
import {v1} from 'uuid';


type MessageType = {
    id: string
    message: string
}

type DialogsType = {
    id: string
    name: string
    avatar: string
}


const initialState = {
    dialogs: [
        {id: v1(), name: 'Ruslan', avatar: 'https://wallpaperaccess.com/full/1551019.jpg'},
        {id: v1(), name: 'Dmitry', avatar: 'https://wallpaperaccess.com/full/1551019.jpg'},
        {id: v1(), name: 'Evgeniy', avatar: 'https://wallpaperaccess.com/full/1551019.jpg'},
        {id: v1(), name: 'Kseniya', avatar: 'https://wallpaperaccess.com/full/1551019.jpg'},
        {id: v1(), name: 'Andrew', avatar: 'https://wallpaperaccess.com/full/1551019.jpg'}
    ]as Array <DialogsType>,
    newMessageText: 'Hello',
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How is your it-incubator?'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Yo'},
    ] as Array <MessageType>
}

export type InitialStateType = typeof initialState

export const dialogsReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            let newMessage = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messages: [
                    ...state.messages,
                    {id: v1(), message: newMessage}
                ]
            }
        case 'CHANGE_NEW_MESSAGE_TEXT':
            return {
                ...state,
                newMessageText: action.updateMessageText
            }
        default:
            return state
    }
}

export const addMessageAC = (/*newMessage: string*/) => ({
    type: 'ADD_MESSAGE'/*, newMessage: newMessage*/
} as const)

export const changeNewMessageTextAC = (updateMessageText: string) => ({
    type: 'CHANGE_NEW_MESSAGE_TEXT',
    updateMessageText: updateMessageText
} as const)

