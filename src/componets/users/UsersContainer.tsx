import React from 'react'
import {ActionType} from '../redux/store';
import {connect} from 'react-redux';
import {followAC, InitialStateType, unfollowAC, UserType, setUsersAC} from '../redux/users-reducer';
import {Users} from './Users';
import {AppRootStateType} from '../redux/redux-store';
import {Dispatch} from 'redux';



type MapStatePropsType = {
    usersPage: InitialStateType
}

type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>)=> void
}

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        usersPage: state.users
    }
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType



let mapDispatchToProps = (dispatch:Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: string) => dispatch(followAC(userId)),
        unfollow: (userId: string) => dispatch(unfollowAC(userId)),
        setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users))

    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


