import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/api";

export const loginUser = createAsyncThunk("auth/loginUser", async ({ username, password }) => {
  const res = await API.post("/login", { username, password });
  localStorage.setItem("token", res.data.token);
  return res.data.user;
});

export const fetchMe = createAsyncThunk("auth/fetchMe", async () => {
  const token = localStorage.getItem("token");
  const res = await API.get("/me", { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
