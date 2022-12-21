type CRUDType = [{
    time: string,
    post: string,
    img: string,
    music: string,
    video: string,
}]

let initialState: CRUDType[] = []

const crudReducer = (state = initialState, action: reducerType) => {
    switch (action.type) {
        case "ADD-POST": {
            return [
                ...state, 
                {
                    time: action.payload.time,
                    post: action.payload.post,
                    img: action.payload.img,
                    music: action.payload.music,
                    video: action.payload.video,
                }
            ]
        }
        case "ADD-IMG": {
            return [
                ...state, 
                {
                    img: action.payload.img,
                }
            ]
        }
        case "ADD-MUSIC": {
            return [
                ...state, 
                {
                    music: action.payload.music,
                }
            ]
        }
        case "ADD-VIDEO": {
            return [
                ...state, 
                {
                    video: action.payload.video,
                }
            ]
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

export default crudReducer;