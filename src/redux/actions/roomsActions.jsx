import axios from "axios"

export const roomsActions = {
    setRooms: (payload) => ({type: 'SET_ROOMS', payload }),
    fetchRooms: () => async (dispatch) => {
        const {data} = await axios.get('/db.json')
        dispatch(roomsActions.setRooms(data.rooms))
    },
    loadingRooms: (payload) => ({type: 'SET_LOADING', payload}) 
}