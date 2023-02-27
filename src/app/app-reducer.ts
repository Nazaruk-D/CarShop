import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authAPI} from "../api/userAPI";
import {setIsLoggedInAC} from "../features/auth/auth-reducer";

export const initializeAppTC = createAsyncThunk(('app/initializeApp'), async (param, {dispatch}) => {
    try {
        const res = await authAPI.me()
        // if (res.data.resultCode === StatusCode.OK) {
        //     dispatch(setIsLoggedInAC({value: true}));
        // } else {
            // handleServerAppError(res.data, dispatch)
        // }
    } catch (err: any) {
        // handleServerNetworkError(err, dispatch)
    }
})


const slice = createSlice({
    name: "app",
    initialState: {
        status: 'loading' as RequestStatusType,
        error: null as null | string,
        initialized: false
    },
    reducers: {
        setAppStatusAC(state, action: PayloadAction<{ status: RequestStatusType }>) {
            state.status = action.payload.status
        },
        setAppErrorAC(state, action: PayloadAction<{ message: null | string }>) {
            state.error = action.payload.message
        },
    },
    extraReducers: builder => {
        builder.addCase(initializeAppTC.fulfilled, (state) => {
            state.initialized = true
        })
    }
})

export const appReducer = slice.reducer;

export const {setAppStatusAC, setAppErrorAC} = slice.actions;

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'




