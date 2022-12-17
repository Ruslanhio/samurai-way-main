import React, {ChangeEvent} from 'react';

import {addMessageAC, changeNewMessageTextAC} from '../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect, useDispatch} from 'react-redux';
import {ActionType, StateType} from '../redux/store';


type DialogsProps = {

    newMessageText: string
    // dispatch: (action: ActionType) => void
}


/*export const DialogsContainer = () => {

    const dispatch = useDispatch()
   
    return <StoreContext.Consumer>
        { store => {
            let state = store.getState().dialogsPage
            const addMessage = () => {
                dispatch(addMessageAC())
            }
            console.log('render')
            const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                dispatch(changeNewMessageTextAC(e.target.value))
            }
            return <Dialogs
                dialogsPage={state}
                addMessage={addMessage}
                changeNewMessageText={onChangeHandler}
                newMessageText={store._state.dialogsPage.NewMessageText}/>


        }
    }
        </StoreContext.Consumer>

};*/
let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage,

    }
}

let mapDispatchToProps = (dispatch: (action: ActionType) => void ) => {
    return {
        changeNewMessageText: (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(changeNewMessageTextAC(e.target.value))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

