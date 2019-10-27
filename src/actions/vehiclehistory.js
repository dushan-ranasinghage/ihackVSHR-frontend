import axios from 'axios'

export function getVeicleHistory() {
    return (dispatch) => {
        axios.get("http://localhost:4000/vehiclereg")
            .then(res => {
                dispatch({ type: 'GET_VEHICLE_HISTORY', payload: res.data })
            })
            .catch(err => {
                dispatch({ type: 'GET_VEHICLE_HISTORY_FAILED', payload: err.message })
            })
    }
}

export function postVehicleHistory(val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11) {
    let newReport = {
        "parts_added": [
            val5
        ],
        
        "vehicle_reg_no": val1,
        "brand": val2,
        "model_no": val3,
        "service_description": val4,
        "customer_name": val6,
        "repair_date": val7,
        "cost": val8,
        "milage": val9,
        "existing_condition": val10,
        "service_center": val11 
        }

    return (dispatch) => {
        axios.post("http://localhost:4000/vehiclereg", newReport)
            .then(res => {
                dispatch({ type: 'POST_VEHICLE_HISTORY', payload: res.data })
            })
            .catch(err => {
                dispatch({ type: 'POST_VEHICLE_HISTORY_FAILED', payload: err.message })
            })
    }
} 

export function approveVehicleHistory(vehicle_reg_no) {
    debugger
    return (dispatch) => {
        axios.patch("http://localhost:4000/vehiclereg/vehicleno/"+vehicle_reg_no)
            .then(res => {
                debugger
                dispatch({ type: 'VEHICLE_HISTORY_APPROVE', payload: res.data })
            })
            .catch(err => {
                debugger
                dispatch({ type: 'VEHICLE_HISTORY_APPROVE_FAILED', payload: err.message })
            })
    }
} 

