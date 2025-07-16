import {createSlice} from "@reduxjs/toolkit"

const storedUserData = JSON.parse(localStorage.getItem("userData"));
const initialState = {
    userData: storedUserData || {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    }
}

export const UserDataSlice = createSlice({
    name : "userData",
    initialState,
    reducers: {
        setUserName : (state,action) =>{
            state.userData.name = action.payload;
        },
        setEmail : (state,action) =>{
            state.userData.email = action.payload;
        },
        setPassword : (state,action) =>{
            state.userData.password = action.payload;
        },
        setConfirmPass : (state,action) =>{
            state.userData.confirmPassword = action.payload;
        }
    },
})

export const {setUserName,setEmail,setPassword,setConfirmPass} = UserDataSlice.actions

export default UserDataSlice.reducer