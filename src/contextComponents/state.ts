export interface AuthState {
    users: User
}

export interface User {
    name: string
    id: number
    islogin: Status
    success: boolean
}

export enum Status {
    userLogin = "User Login",
    userNotLogin = "User not Login"
}

export const initUser: User = {
    name: '',
    id: 0,
    islogin: Status.userNotLogin,
    success: false
}

export const initAuthState: AuthState =  {
    users: initUser
}