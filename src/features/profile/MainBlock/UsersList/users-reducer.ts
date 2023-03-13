import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {GetUsersType, profileAPI, UserType} from "../../../../api/profileAPI";
import {setAppStatusAC} from "../../../../app/app-reducer";
import {AxiosError} from "axios";
import {handleServerNetworkError} from "../../../../utils/error-utils";

export const getUsersTC = createAsyncThunk(('profile/users'), async (param: GetUsersType, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const res = await profileAPI.getUsers(param)
        if (res.status === 200) {
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
})

const slice = createSlice({
    name: "users",
    initialState: {
        users: [],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
    },
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(getUsersTC.fulfilled, (state, action: any) => {
            state.users = action.payload.data.users
            state.pageSize = action.payload.data.pageSize
            state.totalUsersCount = action.payload.data.totalUsersCount
            state.currentPage = action.payload.data.currentPage
        })
    }
});

export type UsersDataType = {
    data: [
        users: [],
        pageSize: number,
        totalUsersCount: number,
        currentPage: number
    ]
}

export const usersReducer = slice.reducer;
