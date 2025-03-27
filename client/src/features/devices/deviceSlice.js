import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import API from '../../services/api'

export const fetchDevices = createAsyncThunk('devices/fetchDevices', async ()=> {
    const response = await API.get("/devices");
    await new Promise((res)=> setTimeout(res, 1000))
    return response.data;
})

const deviceSlice = createSlice({
    name: "devices",
    initialState: {
        list: [],
        loading: false,
        error: null,

    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchDevices.pending, (state)=> {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchDevices.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
          })
          .addCase(fetchDevices.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
    }
})

export default deviceSlice.reducer;