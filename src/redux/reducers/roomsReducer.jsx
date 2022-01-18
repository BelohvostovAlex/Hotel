const initialState = {
    rooms : [],
    isLoading: true,
    isError: false
}

export const roomsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_ROOMS':
            return {
                ...state, rooms: action.payload
            }
        default: return state
    }
}