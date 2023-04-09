import { configureStore } from "@reduxjs/toolkit"
// import { reduxLogger } from "redux-logger"

import orderReducer from "../features/orders/ordersSlice"
import headerReducer from "../features/header/headerSlice"


// const { getDefaultMiddleware } = require("@reduxjs/toolkit")
// const logger = reduxLogger.createLogger()


const store = configureStore({
    reducer: {
        order: orderReducer,
        header: headerReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store
export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch