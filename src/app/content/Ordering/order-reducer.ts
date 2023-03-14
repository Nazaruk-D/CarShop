import {createSlice, PayloadAction} from "@reduxjs/toolkit";


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


export type OrderType = {
    model: {title: string, price: number | null}
    color: {title: string, price: number | null}
    wheels: {title: string, price: number | null}
    interiorColor: {title: string, price: number | null}
    seatingLayout?: {title: string, price: number | null}
    autopilot: {status: boolean, price: number | null}
    steeringControl?: {status: boolean, price: number | null}
    towHitch?: {status: boolean, price: number | null}
    selfDriving?: {status: boolean, price: number | null}
    wallConnector: {status: boolean, price: number | null}
    mobileConnector: {status: boolean, price: number | null}
}