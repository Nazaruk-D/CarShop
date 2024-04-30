import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {OrderType} from "../../../types/OrderType";
import {GetUserOrderType, orderAPI} from "../../../api/orderAPI";
import {setAppStatusAC} from "../../app-reducer";
import {AxiosError} from "axios/index";
import {handleServerNetworkError} from "../../../utils/error-utils";
import {CreateOrderType} from "../../../api/orderAPI";

export const createOrderTC = createAsyncThunk(('order/createOrder'), async (param: CreateOrderType, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const res = await orderAPI.createOrder(param);
        if (res.status === 201) {
            console.log(res)
            thunkAPI.dispatch(setAppStatusAC({status: 'succeeded'}))
            return
        } else {
            return thunkAPI.rejectWithValue({errors: ["error"], fieldErrors: []})
        }
    } catch (err: any) {
        console.log(err)
        thunkAPI.dispatch(setAppStatusAC({status: 'failed'}))
        const error: AxiosError = err.response.data
        handleServerNetworkError(error, thunkAPI.dispatch)
        return thunkAPI.rejectWithValue({errors: [error.message], fieldErrors: undefined})
    }
});

export const getUserOrdersTC = createAsyncThunk(('order/getUserOrders'), async (param: GetUserOrderType, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const res = await orderAPI.getUserOrders(param)
        if (res.status === 200) {
            console.log(res)
            thunkAPI.dispatch(setAppStatusAC({status: 'succeeded'}))
            return {value: res.data}
        } else {
            return thunkAPI.rejectWithValue({errors: ["error"], fieldErrors: []})
        }
    } catch (err: any) {
        console.log(err)
        thunkAPI.dispatch(setAppStatusAC({status: 'failed'}))
        const error: AxiosError = err.response.data
        handleServerNetworkError(error, thunkAPI.dispatch)
        return thunkAPI.rejectWithValue({errors: [error.message], fieldErrors: undefined})
    }
});

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
    }
});

export const orderReducer = slice.reducer;
export const {totalSumAC, setOrderState, clearModelTitle, toggleOrderModalStatus} = slice.actions;


