import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface accessTokenState {
    value: string,
}

const initialState: accessTokenState = {
    value: "",
}

export const accessTokenSlice = createSlice({
    name: 'accessToken',
    initialState,
    reducers: {
        updateAccessToken: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { updateAccessToken } = accessTokenSlice.actions

export default accessTokenSlice.reducer
