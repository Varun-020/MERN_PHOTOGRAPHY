import { CLOSE_LOADER, LOGIN_ERRORS, REGISTER_ERRORS, SET_LOADER, SET_TOKEN } from "../types/UserTypes";
import axios from "axios";
export const postRegister = (state)=>{
    return async(dispatch)=>{
        const config ={
                headers:{
                    "Content-Type":"application/json"
                }
            }
        dispatch({type:SET_LOADER});
        try {
            const {data} = await axios.post('/signup',state,config);
            localStorage.setItem('myToken', data.token);
			dispatch({ type: SET_TOKEN, payload: data.token });
            dispatch({type:CLOSE_LOADER})
        } catch (error) {
            dispatch({type:CLOSE_LOADER});
            dispatch({type:REGISTER_ERRORS,payload:error.response.data.errors});

        }
    }
};

export const postLogin = (state)=>{
    return async (dispatch)=>{
        const config ={
            headers:{
                "Content-Type":"application/json"
            }
        }
        dispatch({type:SET_LOADER});
        try{
            dispatch({type:SET_LOADER})
            const {data} = await axios.post('/login',state,config);
            dispatch({type:CLOSE_LOADER});
            localStorage.setItem('myToken',data.token);
            dispatch({type:SET_TOKEN,payload:data.token});   
        }
        catch(error){
            dispatch({type:CLOSE_LOADER});
            dispatch({type:LOGIN_ERRORS,payload: error.response.data.errors});
        }
    }
};