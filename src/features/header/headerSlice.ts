import axios from 'axios'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

export type Summary = {
    "id"?: number
    "first_name"?: string
    "last_name"?: string
    "photo_url"?: null | string
    "gender"?: string
    "birth_date"?: string
    "home_phone"?: string
    "mobile_phone"?: string
    "work_phone"?: string
    "email"?: string
    "activity"?: {
        "sms": number
        "email": number
        "orders": number
    },
    "carrier_status"?: {
        "since": string
        "status": string
    }
}

type InitialState = {
    loading: boolean
    summary: Summary
    error: string
}

const initialState: InitialState = {
    loading: false,
    summary: {},
    error: ""
}

export const fetchSummary = createAsyncThunk("summary/fetchOrders", async () => {
    return await axios
        .get("https://evoteam-verasoft.github.io/data/summary.json")
        .then(response => response.data)
})

const summarySlice = createSlice({
    name: "summary",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchSummary.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchSummary.fulfilled, (state, action: PayloadAction<Summary>) => {
            state.loading = false
            state.summary = action.payload
            state.error = ""
        })
        builder.addCase(fetchSummary.rejected, (state, action) => {
            state.loading = false
            state.summary = {}
            state.error = action.error.message || "Something went wrong"
        })
    }
})

export default summarySlice.reducer