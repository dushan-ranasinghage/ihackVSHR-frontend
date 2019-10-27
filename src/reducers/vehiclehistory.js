export default function (state = {loading:false}, action) {
    switch (action.type) {
        case 'POST_VEHICLE_HISTORY':
            return { ...state, vehiclehistory: action.payload };
        case 'POST_VEHICLE_HISTORY_FAILED':
            return { ...state, vehiclehistory: action.payload };
        case 'GET_VEHICLE_HISTORY':
            return { ...state, historyData: action.payload };
        case 'GET_VEHICLE_HISTORY_FAILED':
            return { ...state, historyData: action.payload };
        case 'VEHICLE_HISTORY_APPROVE':
            return { ...state, approveData: action.payload };
        case 'VEHICLE_HISTORY_APPROVE_FAILED':
            return { ...state, approveData: action.payload };
        default:
            return state;
    }
}