import { combineReducers, legacy_createStore } from '@reduxjs/toolkit'
import crudReducer from './profileState/CRUDState'
import profileReducer from './profileState/ProfileState'

const rootReducer = combineReducers({
    posts: crudReducer,
    profile: profileReducer,
    // profileInfo: profileInfoReducer,
    // status: todolistReducer,
})
export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// window.store = store