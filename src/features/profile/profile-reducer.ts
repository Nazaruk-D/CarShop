import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authAPI} from "../../api/userAPI";
import {setAppStatusAC} from "../../app/app-reducer";
import {AxiosError} from "axios";
import {handleServerNetworkError} from "../../utils/error-utils";


export const fetchProfileTC = createAsyncThunk(('auth/me'), async (param, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const res = await authAPI.me()
        if (res.data.email) {
            thunkAPI.dispatch(setProfileDataAC(res.data));
            thunkAPI.dispatch(setAppStatusAC({status: 'succeeded'}))
            return
        } else {
            return thunkAPI.rejectWithValue({errors: ["error"], fieldErrors: []})
        }
    } catch (err: any) {
        thunkAPI.dispatch(setAppStatusAC({status: 'failed'}))
        const error: AxiosError = err.response.data
        handleServerNetworkError(error, thunkAPI.dispatch)
        return thunkAPI.rejectWithValue({errors: [error.message], fieldErrors: undefined})
    }
})

const slice = createSlice({
    name: "profile",
    initialState: {
        user: {
            id: null,
            email: null,
            firstName: null,
            lastName: null,
            avatar: null,
            role: null,
            createdAt: null,
            updatedAt: null,
        } as UserType
    },
    reducers: {
        setProfileDataAC: (state, action) => {
            state.user = action.payload.user;
        },
        clearProfileDataAC: (state) => {
            state.user = {
                id: null,
                email: null,
                firstName: null,
                lastName: null,
                avatar: null,
                role: null,
                createdAt: null,
                updatedAt: null,
            }
        },
    }
});

export const profileReducer = slice.reducer;
export const {setProfileDataAC, clearProfileDataAC} = slice.actions;


type UserType = {
    id: null | number
    email: null | string
    firstName: null | string
    lastName: null | string
    avatar: null | string
    role: null | string
    createdAt: null | string
    updatedAt: null | string
}