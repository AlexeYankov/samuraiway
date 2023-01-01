import { combineReducers, legacy_createStore } from '@reduxjs/toolkit'
import crudReducer from './profileState/CRUDState'
import profileReducer from './profileState/ProfileState'
import subscribersReducer from './profileState/SubscribersState'

const rootReducer = combineReducers({
    posts: crudReducer,
    profile: profileReducer,
    subscribers: subscribersReducer,
    // profileInfo: profileInfoReducer,
    // status: todolistReducer,
})
export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// window.store = store