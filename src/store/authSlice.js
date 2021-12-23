import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userName: null,
    userEmail: null,
    userId: null,
    userImage: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getActiveUser: (state, action) => {
            state.userName = action.payload.userName;
            state.userEmail = action.payload.userEmail;
            state.userId = action.payload.userId;
            state.userImage = action.payload.userImage;
        },

        setActiveUser: (state, action) => {
            state.userName = action.payload.userName;
            state.userEmail = action.payload.userEmail;
            state.userId = action.payload.userId;
            state.userImage = action.payload.userImage;
        },

        setUserLogout: (state) => {
            state.userName = null;
            state.userEmail = null;
            state.userId = null;
            state.userImage = null;
        }
    }
});

export const { setActiveUser, setUserLogout, getActiveUser } = authSlice.actions;

export const selectUserName = state => state.userName;
export const selectUserEmail = state => state.userEmail;

export default authSlice.reducer;