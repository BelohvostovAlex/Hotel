import axios from "axios"

export const roomsActions = {
    setRooms: (payload) => ({type: 'SET_ROOMS', payload }),
    fetchRooms: () => async (dispatch) => {
        try {
            dispatch(roomsActions.loadingRooms(false))
            const {data} = await axios.get('/db.json')
            dispatch(roomsActions.setRooms(data.rooms))
        } catch (error) {
            dispatch(roomsActions.setError(error))
        }
        dispatch(roomsActions.loadingRooms(true))
    },
    loadingRooms: (payload) => ({type: 'SET_LOADING', payload}),
    setError: (err) => ({type: 'SET_ERROR', payload: err}) 
}