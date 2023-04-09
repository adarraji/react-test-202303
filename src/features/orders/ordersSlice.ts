import axios from 'axios'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

export type Orders = {
    orders_A?: []
    orders_AA?: []
    orders_AAA?: {
        sent?: {
            id: number
            order_id: number
            sent_dt: string
            sent_tm: string
            subject: {
                title: string
                email: string
            }
            type: string
        }[]
    }
    orders_B?: []
    orders_C?: []
}

type InitialState = {
    loading: boolean
    orders: Orders
    error: string
}

const initialState: InitialState = {
    loading: false,
    orders: {},
    error: ""
}

export const fetchOrders = createAsyncThunk("order/fetchOrders", async () => {
    return await axios
        .get("https://evoteam-verasoft.github.io/data/orders.json")
        .then(response => response.data)
})

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchOrders.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchOrders.fulfilled, (state, action: PayloadAction<Orders>) => {
            state.loading = false
            state.orders = action.payload
            state.error = ""
        })
        builder.addCase(fetchOrders.rejected, (state, action) => {
            state.loading = false
            state.orders = {}
            state.error = action.error.message || "Something went wrong"
        })
    }
})

export default orderSlice.reducer