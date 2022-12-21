import { combineReducers, legacy_createStore } from '@reduxjs/toolkit'
import crudReducer from './profileState/CRUDState'

const rootReducer = combineReducers({
    posts: crudReducer,
    // status: todolistReducer,
    // status: todolistReducer,
})
export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// window.store = store