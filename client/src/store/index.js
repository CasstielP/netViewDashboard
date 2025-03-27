import {configureStore} from "@reduxjs/toolkit"
import deviceReducer from "../features/devices/deviceSlice"

const store = configureStore({
    reducer: {
        devices: deviceReducer,
    }
})

export default store;