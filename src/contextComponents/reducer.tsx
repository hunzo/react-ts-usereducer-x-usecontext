import React, { useContext, useReducer } from 'react'
import { ActionType, AuthActions } from './actions'
import { authContext } from './context'
import { AuthState, initAuthState } from './state'

export const authReducer = (state: AuthState, action: AuthActions) => {
    switch (action.type) {
        case ActionType.LogIn:
            return {
                ...state,
                users: {
                    ...state.users,
                    name: action.payload.name,
                    id: action.payload.id,
                    islogin: action.payload.islogin,
                    success: action.payload.success
                },
            }
        case ActionType.LogOut:
            return {
                ...state,
                users: {
                    ...state.users,
                    name: action.payload.name,
                    id: action.payload.id,
                    islogin: action.payload.islogin,
                    success: action.payload.success
                }
            }
        default:
            return state
    }
}

export const AuthProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initAuthState)
    return (
        <>
            <authContext.Provider value={{ state, dispatch }}>
                {children}
            </authContext.Provider>
        </>
    )
}

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error('useAuth must be use inside AuthProvider')
    return context
}
