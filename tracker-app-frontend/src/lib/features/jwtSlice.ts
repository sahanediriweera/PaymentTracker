import { createSlice,PayloadAction } from "@reduxjs/toolkit";

type jwtToken = {
    token:string;
    role:string;
}

const initialState = {
    token: '',
    role: ''
}

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        reset : () => initialState,
        setToken: (state,action:PayloadAction<jwtToken>) => {
            state.token = action.payload.token;
            state.role = action.payload.role;
        }
    }
})

export const {reset, setToken} = tokenSlice.actions;

export default tokenSlice.reducer;