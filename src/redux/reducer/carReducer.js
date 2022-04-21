const initialState = {
    carData:[]
}

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case "fetchCarData":
            return{
                ...state,
                carData: action.payload
            }
            default:
                return state
    }
}
export default carReducer;