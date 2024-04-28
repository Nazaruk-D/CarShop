import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {OrderType} from "../../../types/OrderType";

const slice = createSlice({
    name: "order",
    initialState: {
        order: {} as OrderType,
        totalPrice: 0
    },
    reducers: {
        setOrderState: (state, action) => {
            state.order = action.payload
        },
        totalSumAC: (state, action) => {
            state.totalPrice = action.payload
        },
        clearModelTitle: (state) => {
            state.order.model.title = ''
        }
    },
});

export const orderReducer = slice.reducer;
export const {totalSumAC, setOrderState, clearModelTitle} = slice.actions;


