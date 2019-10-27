import { combineReducers } from 'redux'

import user from './user'
import vehiclehistory from './vehiclehistory'

const rootReducer = combineReducers({
    user,
    vehiclehistory
})

export default rootReducer;
