import {usersType} from '../../App'

let initialState: usersType = {
    aboutMe: '',
    contacts: {
        github: '',
        vk: '',
        facebook: '',
        instagram: '',
        twitter: '',
        website: '',
        youtube: '',
        mainLink: ''
    },
    fullName: '',
    lookingForAJob: false,
    lookingForAJobDescription: '',
    userID: 0,
    photos: {
        large: '',
        small: ''
    },
    subscribers: 0
}

const profileReducer = (state = initialState, action: reducerType) :usersType => {
    switch (action.type) {
        case "ADD-POST": {
            return state
        }
        case "ADD-IMG": {
            return state
            
        }
        case "ADD-MUSIC": {
            return state
                
            
        }
        case "ADD-VIDEO": {
            return state
              
            
        }
        default: 
            return state
    }
}

type reducerType = addPostType | addPostImgType | addPostMusicType | addPostVideoType

type addPostType = ReturnType<typeof addPostReducer>
export const addPostReducer = (time: string, post: string, img: string, music: string, video: string) => {
    return {
        type: "ADD-POST",
        payload: {
            time,
            post,
            img,
            music,
            video
        }
    } as const
}

type addPostImgType = ReturnType<typeof addPostImgReducer>
export const addPostImgReducer = (img: string) => {
    return {
        type: "ADD-IMG",
        payload: {
            img
        }
    } as const
}

type addPostMusicType = ReturnType<typeof addPostMusicReducer>
export const addPostMusicReducer = (music: string) => {
    return {
        type: "ADD-MUSIC",
        payload: {
            music
        }
    } as const
}

type addPostVideoType = ReturnType<typeof addPostVideoReducer>
export const addPostVideoReducer = (video: string) => {
    return {
        type: "ADD-VIDEO",
        payload: {
            video
        }
    } as const
}

export default profileReducer;