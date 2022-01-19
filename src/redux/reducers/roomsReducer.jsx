const initialState = {
    rooms : [],
    isLoaded: false,
    isError: false
}

export const roomsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_ROOMS':
            return {
                ...state, rooms: action.payload, isLoaded: true
            }
        default: return state
    }
}