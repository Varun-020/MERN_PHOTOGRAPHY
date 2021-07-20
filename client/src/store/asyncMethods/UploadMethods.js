import axios from "axios";
import {  REDIRECT_TRUE,UPLOAD_ERRORS,SET_MESSAGE } from "../types/uploadTypes";
import {CLOSE_LOADER, SET_LOADER } from "../types/UserTypes";

export const uploadImageAction = (postData)=>{
    return async(dispatch,getState) =>{    
        const {AuthReducer :{token}}=getState();   
        dispatch({type:SET_LOADER});
        try{           
            const config={
                headers:{ Authorization:`Bearer ${token}`}
            }
            const {data:{msg}} = await axios.post('/uploadImage',postData,config);
            dispatch({type:CLOSE_LOADER});
            dispatch({type:REDIRECT_TRUE});
            dispatch({type:SET_MESSAGE,payload:msg});
            
        }
        catch(error){           
            dispatch({type:CLOSE_LOADER});
            dispatch({type:UPLOAD_ERRORS,payload:error.response.data.errors});
        }
    }

};
export const uploadOfferAction = (postData)=>{
    return async(dispatch,getState) =>{    
        const {AuthReducer :{token}}=getState();   
        dispatch({type:SET_LOADER});
        try{           
            const config={
                headers:{ Authorization:`Bearer ${token}`}
            }
            const {data:{msg}} = await axios.post('/setoffer',postData,config);
            dispatch({type:CLOSE_LOADER});
            dispatch({type:REDIRECT_TRUE});
            dispatch({type:SET_MESSAGE,payload:msg});
            
        }
        catch(error){           
            dispatch({type:CLOSE_LOADER});
            dispatch({type:UPLOAD_ERRORS,payload:error.response.data.errors});
        }
    }

};

