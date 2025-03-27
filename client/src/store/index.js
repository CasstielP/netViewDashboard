import {configureStore} from "@reduxjs/toolkit"
import deviceReducer from "../features/devices/deviceSlice"
import configReducer from '../features/config/configSlice'
import authReducer from '../features/auth/authSlice'



const store = configureStore({
    reducer: {
        devices: deviceReducer,
        config: configReducer,
        auth: authReducer,
    }
})

export default store;