import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/api";

export const fetchConfig = createAsyncThunk("config/fetch", async () => {
  const res = await API.get("/config");
  return res.data;
});

export const updateConfig = createAsyncThunk("config/update", async ({ key, value }) => {
  const res = await API.put(`/config/${key}`, { value });
  return res.data;
});

const configSlice = createSlice({
  name: "config",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchConfig.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchConfig.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateConfig.fulfilled, (state, action) => {
        const updated = action.payload;
        const idx = state.list.findIndex((c) => c.key === updated.key);
        if (idx !== -1) state.list[idx] = updated;
      });
  },
});

export default configSlice.reducer;
