import React from 'react'
import './App.css'
import { ActionType } from './contextComponents/actions'
import { useAuth } from './contextComponents/reducer'
import { Status } from './contextComponents/state'

const App: React.FC = () => {
    const { state, dispatch } = useAuth()
    return (
        <div className="App">
            <button
                onClick={() => {
                    dispatch({
                        type: ActionType.LogIn,
                        payload: {
                            name: 'user1',
                            id: 10,
                            islogin: Status.userLogin,
                            success: true,
                        },
                    })
                }}
            >
                user1
            </button>
            <button
                onClick={() => {
                    dispatch({
                        type: ActionType.LogIn,
                        payload: {
                            name: 'user2',
                            id: 20,
                            islogin: Status.userLogin,
                            success: false,
                        },
                    })
                }}
            >
                user2
            </button>
            <button
                onClick={() => {
                    dispatch({
                        type: ActionType.LogOut,
                        payload: {
                            name: 'user2',
                            id: 20,
                            islogin: Status.userNotLogin,
                            success: true,
                        },
                    })
                }}
            >
                user2-logout
            </button>

            <pre>{JSON.stringify(state, null, 4)}</pre>
        </div>
    )
}

export default App
