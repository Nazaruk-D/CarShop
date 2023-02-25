import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";


// export const loginTC = createAsyncThunk<undefined, LoginParamsType, { rejectValue: { errors: Array<string>, fieldErrors?: Array<any> } }>(('auth/login'), async (param: LoginParamsType, thunkAPI) => {
//     thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
//     try {
//         const res = await authAPI.login(param)
//         if (res.data.resultCode === StatusCode.OK) {
//             thunkAPI.dispatch(setAppStatusAC({status: 'succeeded'}))
//             return
//         } else {
//             handleServerAppError(res.data, thunkAPI.dispatch)
//             return thunkAPI.rejectWithValue({errors: res.data.messages, fieldErrors: res.data.fieldsErrors})
//         }
//     } catch (err: any) {
//         const error: AxiosError = err
//         handleServerNetworkError(error, thunkAPI.dispatch)
//         return thunkAPI.rejectWithValue({errors: [error.message], fieldErrors: undefined})
//     } finally {
//         thunkAPI.dispatch(setAppStatusAC({status: 'idle'}))
//     }
// })
//
// export const logoutTC = createAsyncThunk(('auth/logout'), async (param, thunkAPI) => {
//     thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
//     try {
//         const res = await authAPI.logout()
//         if (res.data.resultCode === StatusCode.OK) {
//             // thunkAPI.dispatch(setIsLoggedInAC({value: false}))
//             thunkAPI.dispatch(setAppStatusAC({status: 'succeeded'}))
//             thunkAPI.dispatch(clearTodosDataAC())
//             return
//         } else {
//             handleServerAppError(res.data, thunkAPI.dispatch)
//             return thunkAPI.rejectWithValue({})
//         }
//     } catch (error: any) {
//         handleServerNetworkError(error, thunkAPI.dispatch)
//         return thunkAPI.rejectWithValue({})
//     }
// })


const slice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        setIsLoggedInAC(state, action: PayloadAction<{ value: boolean }>) {
            state.isLoggedIn = action.payload.value
        }
    },
    extraReducers: builder => {
        // builder.addCase(loginTC.fulfilled, (state) => {
        //     state.isLoggedIn = true
        // })
        // builder.addCase(logoutTC.fulfilled, (state) => {
        //     state.isLoggedIn = false
        // })
    }
})

export const authReducer = slice.reducer;
export const {setIsLoggedInAC} = slice.actions;
