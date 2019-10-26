import { combineReducers } from 'redux'

import test from './test'
import user from './user'
import vehiclehistory from './vehiclehistory'

const rootReducer = combineReducers({
    test,
    user,
    vehiclehistory
})

export default rootReducer;
