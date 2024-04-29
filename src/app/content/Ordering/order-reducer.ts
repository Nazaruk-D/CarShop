import {createSlice} from "@reduxjs/toolkit";
import {OrderType} from "../../../types/OrderType";

const slice = createSlice({
    name: "order",
    initialState: {
        order: {} as OrderType,
        totalPrice: 0,
        orderModalActive: false
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
        },
        toggleOrderModalStatus: (state) => {
            state.orderModalActive = !state.orderModalActive
        }
    },
});

export const orderReducer = slice.reducer;
export const {totalSumAC, setOrderState, clearModelTitle, toggleOrderModalStatus} = slice.actions;


