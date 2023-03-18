import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
    ChangeStatusType,
    DeleteUserType,
    GetUsersType,
    profileAPI,
    ScheduleType,
    UserType
} from "../../../../api/profileAPI";
import {setAppStatusAC} from "../../../../app/app-reducer";
import {AxiosError} from "axios";
import {handleServerNetworkError} from "../../../../utils/error-utils";
import {ModelType} from "../../profile-reducer";

export const getScheduleListTC = createAsyncThunk(('users/getScheduleList'), async (param: any, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const res = await profileAPI.getScheduleList(param)
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
})
export const changeScheduleStatusTC = createAsyncThunk(('users/changeStatus'), async (param: ChangeStatusType, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const res = await profileAPI.changeStatus(param);
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
})

const slice = createSlice({
    name: "schedule",
    initialState: {
        orders: [],
        pageSize: 10,
        totalScheduleCount: 0,
        currentPage: 1,
    } as ScheduleState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(getScheduleListTC.fulfilled, (state, action) => {
            state.orders = action.payload.value.data.orders
            state.totalScheduleCount = action.payload.value.data.totalScheduleCount
            state.currentPage = action.payload.value.data.currentPage
        })
        // builder.addCase(changeScheduleStatusTC.fulfilled, (state, action: PayloadAction<{ value: ChangeStatusType }>) => {
        //     const { status, id } = action.payload.value;
        //     state.orders = state.orders.map((order) => (order.id === id ? { ...order, status } : order));
        //     return state;
        // });
    }
});

export type ScheduleState = {
    orders: ScheduleType[];
    pageSize: number
    totalScheduleCount: number
    currentPage: number
}

export const scheduleReducer = slice.reducer;


