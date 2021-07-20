import axios from "axios"
import {SET_LOADER,CLOSE_LOADER,SET_MESSAGE,CONTACT_ERROR,BOOKING_ERROR,SET_IMAGE,SET_OFFER,SET_OFFER_MESSAGE} from '../types/ContactTypes';
import { REDIRECT_TRUE } from "../types/uploadTypes";

export const PostContact =(state)=>{
    return async(dispatch)=>{
        const config ={
            headers:{
                "Content-Type":"application/json"
            }
        }
        dispatch({type:SET_LOADER});
        try {
            const {data} = await axios.post('/contactUs',state,config);
            dispatch({type:CLOSE_LOADER});
            dispatch({type:SET_MESSAGE,payload:data.msg});
            
        } catch (error) {
            console.log(error.response)
            dispatch({type:CLOSE_LOADER});
            dispatch({type:CONTACT_ERROR,payload:error.response.data.errors})
        }
   
    }
}
export const BookingAction=(postData)=>{
    return async (dispatch)=>{
        dispatch({type:SET_LOADER});
        try{           
            const config={
                headers:{
                    "Content-Type":"application/json"
                }
            }
            const {data:{msg}} = await axios.post('/booking',postData,config);
            dispatch({type:CLOSE_LOADER});
            dispatch({type:SET_MESSAGE,payload:msg});
            dispatch({type:REDIRECT_TRUE});
            
        }
        catch(error){          
            dispatch({type:CLOSE_LOADER});
            dispatch({type:BOOKING_ERROR,payload:error.response.data.errors});
        }
    }
};

export const galleryAction =()=>{
    return async (dispatch)=>{
        dispatch({type:SET_LOADER});
        const config ={
            headers:{
                "Content-Type":"application/json"
            }
        }
        try{           
            const {data} = await axios.get("/gallery",config);
            dispatch({type:CLOSE_LOADER});
            dispatch({type:SET_IMAGE,payload:data.gallery});
            
        }
        catch(error){          
            dispatch({type:CLOSE_LOADER});
            console.log(error.message);
        }
    }
};

export const fetchOffer=()=>{
    return async(dispatch)=>{
        dispatch({type:SET_LOADER});
        const config ={
            headers:{
                "Content-Type":"application/json"
            }
        }
        try{           
            const {data} = await axios.get("/offer",config);
            dispatch({type:CLOSE_LOADER});
            dispatch({type:SET_OFFER,payload:data.offer});
            
        }
        catch(error){          
            dispatch({type:CLOSE_LOADER});
            console.log(error.message);
        }
    }
};
export const DeleteOffer=(token)=>{
    return async(dispatch)=>{
    
    const confirm = window.confirm('Are you really want to delete the offer ?');
            if (confirm) {
                dispatch({ type: SET_LOADER });
                try {
                    const config = {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    };
                    const {
                        data: { msg },
                    } = await axios.get(`/delete`, config);
                    
                    dispatch({ type: SET_OFFER_MESSAGE, payload: msg });
                } catch (error) {
                    dispatch({ type: CLOSE_LOADER });
                    console.log(error);
                }
        }
    }
}
