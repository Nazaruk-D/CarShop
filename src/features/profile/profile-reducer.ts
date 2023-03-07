import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authAPI, UserData} from "../../api/userAPI";
import {setAppStatusAC} from "../../app/app-reducer";
import {AxiosError} from "axios";
import {handleServerNetworkError} from "../../utils/error-utils";
import {profileAPI, UserType} from "../../api/profileAPI";
import {loginTC} from "../auth/auth-reducer";


export const fetchProfileTC = createAsyncThunk(('profile/me'), async (param, thunkAPI) => {
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

export const updateProfileTC = createAsyncThunk(('profile/updateProfile'), async (param: {id: number, userData: UserType}, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const res = await profileAPI.updateProfile(param.id, param.userData)
        if (res.status === 200) {
            console.log(res)
            // thunkAPI.dispatch(setProfileDataAC(res.data));
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
    },
});

export const profileReducer = slice.reducer;
export const {setProfileDataAC, clearProfileDataAC} = slice.actions;


