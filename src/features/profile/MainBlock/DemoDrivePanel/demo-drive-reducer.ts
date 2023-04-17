import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CreateOrderType, DemoDriveType, GetDemoDriveOrdersType} from "../../../../api/demoDriveAPI";
import {setAppStatusAC} from "../../../../app/app-reducer";
import {AxiosError} from "axios";
import {handleServerNetworkError} from "../../../../utils/error-utils";
import {ChangeStatusType, demoDriveAPI} from "../../../../api/demoDriveAPI";

export const getDemoDriveListTC = createAsyncThunk(('users/getDemoDriveList'), async (param: GetDemoDriveOrdersType, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const res = await demoDriveAPI.getDemoDriveOrders(param)
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

export const changeDemoDriveStatusTC = createAsyncThunk(('users/changeDemoDriveStatus'), async (param: ChangeStatusType, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const res = await demoDriveAPI.updateDemoDriveStatus(param);
        if (res.status === 200) {
            console.log(res)
            await param.callback();
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

export const createDemoDriveOrderTC = createAsyncThunk(('users/createDemoDriveOrder'), async (param: CreateOrderType, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const res = await demoDriveAPI.createDemoDriveOrder(param);
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

const slice = createSlice({
    name: "demoDrive",
    initialState: {
        orders: [],
        pageSize: 10,
        totalDemoDriveOrdersCount: 0,
        currentPage: 1,
    } as DemoDriveState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(getDemoDriveListTC.fulfilled, (state, action) => {
            state.orders = action.payload.value.data.orders
            state.totalDemoDriveOrdersCount = action.payload.value.data.totalDemoDriveOrdersCount
            state.currentPage = action.payload.value.data.currentPage
        })
        // builder.addCase(changeScheduleStatusTC.fulfilled, (state, action: PayloadAction<{ value: ChangeStatusType }>) => {
        //     const { status, id } = action.payload.value;
        //     state.orders = state.orders.map((order) => (order.id === id ? { ...order, status } : order));
        //     return state;
        // });
    }
});

export type DemoDriveState = {
    orders: DemoDriveType[];
    pageSize: number
    totalDemoDriveOrdersCount: number
    currentPage: number
}

export const demoDriveReducer = slice.reducer;


