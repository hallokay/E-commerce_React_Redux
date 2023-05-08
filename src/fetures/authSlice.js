import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state) {
            state.isLogin = true
        },
        logOut(state) {
            state.isLogin = false
        }


    }
})

export const { login, logOut } = AuthSlice.actions;
export default AuthSlice.reducer;