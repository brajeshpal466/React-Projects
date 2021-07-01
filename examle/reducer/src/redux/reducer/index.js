import {combineReducers} from 'redux'
import { bookingReducer } from './BookingApoint'

const reducers = combineReducers({
    BookingAppointment : bookingReducer,
})

export default reducers;