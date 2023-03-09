import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authAPI} from "../../api/userAPI";
import {setAppStatusAC} from "../../app/app-reducer";
import {AxiosError} from "axios";
import {handleServerNetworkError} from "../../utils/error-utils";
import {profileAPI, ResetUserPasswordType, UserType} from "../../api/profileAPI";


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

export const updateProfileTC = createAsyncThunk(('profile/updateProfile'), async (userData: UserType, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const res = await profileAPI.updateProfile(userData)
        if (res.status === 200) {
            console.log(res)
            thunkAPI.dispatch(setProfileDataAC(res.data));
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

export const resetPasswordTC = createAsyncThunk(('profile/resetPassword'), async (passwordData: ResetUserPasswordType, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const res = await profileAPI.resetPassword(passwordData)
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
    name: "profile",
    initialState: {
        user: {
            id: null,
            email: null,
            firstName: null,
            lastName: null,
            avatar: null,
            region: null,
            role: null,
            phoneNumber: null,
            createdAt: null,
            updatedAt: null,

        } as UserType,
        activeModel: "ModelS" as ModelType
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
                region: null,
                phoneNumber: null,
                createdAt: null,
                updatedAt: null,
            }
        },
        setActiveModel: (state, action: PayloadAction<{ value: ModelType }>) => {
            state.activeModel = action.payload.value
        },
    },
});

export const profileReducer = slice.reducer;
export const {setProfileDataAC, clearProfileDataAC, setActiveModel} = slice.actions;


export type ModelType = "Model S" | "Model 3" | "Model X" | "Model Y" | "Cybertruck" | "Solar Roof" | "Solar Panels"
