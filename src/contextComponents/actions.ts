import { User } from "./state"

export enum ActionType {
    LogIn,
    LogOut,
}

export interface LogIn {
    type: ActionType.LogIn
    payload: User
}

export interface LogOut {
    type: ActionType.LogOut
    payload: User
}

export type AuthActions = LogIn | LogOut