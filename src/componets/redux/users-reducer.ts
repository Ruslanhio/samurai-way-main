
import {ActionType} from './store';



export type UserType = {
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



const initialState = {
    users: [] as Array <UserType>
}

export type InitialStateType = typeof initialState



export const usersReducer = (state:InitialStateType  = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW' :
            return {
                ...state,
                users: state.users.map(u=>u.id ===action.usersId ? {...u, followed: true}: u)
            }
        case 'UNFOLLOW' :
            return {
              ...state,
                users : state.users.map(u => u.id === action.userId ? {...u, followed: false}: u)
            }
        case 'SET-USERS' :
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (usersId: string, ) => ({type: 'FOLLOW', usersId}as const)
export const unfollowAC = (userId: string) => ({type: 'UNFOLLOW', userId}as const)
export const setUsersAC = (users:Array<UserType>) => ({type: 'SET-USERS', users}as const)



