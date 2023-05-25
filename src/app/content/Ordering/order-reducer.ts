import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {OrderType} from "../../../types/OrderType";


// export const resetPasswordTC = createAsyncThunk(('order/resetPassword'), async (passwordData: ResetUserPasswordType, thunkAPI) => {
//     thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
//     try {
//         const res = await profileAPI.resetPassword(passwordData)
//         if (res.status === 200) {
//             console.log(res)
//             thunkAPI.dispatch(setAppStatusAC({status: 'succeeded'}))
//             return
//         } else {
//             return thunkAPI.rejectWithValue({errors: ["error"], fieldErrors: []})
//         }
//     } catch (err: any) {
//         console.log(err)
//         thunkAPI.dispatch(setAppStatusAC({status: 'failed'}))
//         const error: AxiosError = err.response.data
//         handleServerNetworkError(error, thunkAPI.dispatch)
//         return thunkAPI.rejectWithValue({errors: [error.message], fieldErrors: undefined})
//     }
// })

const slice = createSlice({
    name: "order",
    initialState: {
        order: {} as OrderType,
        totalPrice: 0
    },
    reducers: {
        setOrderState: (state, action) => {
            state.order = action.payload
        },
        totalSumAC: (state, action) => {
            state.totalPrice = action.payload
        },
    },
});

export const orderReducer = slice.reducer;
export const {totalSumAC, setOrderState} = slice.actions;


