import {configureStore} from "@reduxjs/toolkit"
import deviceReducer from "../features/devices/deviceSlice"
import configReducer from '../features/config/configSlice'




const store = configureStore({
    reducer: {
        devices: deviceReducer,
        config: configReducer
    }
})

export default store;