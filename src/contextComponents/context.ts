import React from 'react'
import { AuthActions } from './actions'
import { AuthState } from './state'

type Dispatch = (action: AuthActions) => void
export const authContext = React.createContext<{
    state: AuthState
    dispatch: Dispatch
} | undefined>(undefined)
