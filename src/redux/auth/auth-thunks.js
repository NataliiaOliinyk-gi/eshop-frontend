import { createAsyncThunk } from "@reduxjs/toolkit";

import { registerUserApi, loginUserApi } from "../../shared/api/auth-api";

export const registerUser = createAsyncThunk(
    "auth/register",
    async (payload, { rejectWithValue }) => {
        const { data, error } = await registerUserApi(payload);
        if (data) return data;
        return rejectWithValue(error?.response?.data?.message || error?.message);
    }
);

export const loginUser = createAsyncThunk(
    "auth/login",
    async (payload, { rejectWithValue }) => {
        const { data, error } = await loginUserApi(payload);
        if (data) return data.data;
        return rejectWithValue(error?.response?.data?.message || error?.message);
    }
);