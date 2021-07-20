import {SET_LOADER,CLOSE_LOADER,UPLOAD_ERRORS,
    REMOVE_ERRORS, REDIRECT_FALSE, REDIRECT_TRUE, 
    REMOVE_MESSAGE, SET_MESSAGE } 
from "../types/uploadTypes";

const initState ={
    loading:false,
    uploadrErrors:[],
	redirect:false,
    message:""
}

const UploadReducer =(state=initState,action)=>{
    if(action.type === SET_LOADER){
        return {...state,loading:true};
    }
    else if(action.type === CLOSE_LOADER){
        return {...state,loading:false};
    }else if(action.type === REDIRECT_TRUE){
        return {...state,redirect:true}
    }
    else if(action.type === REDIRECT_FALSE){
        return {...state,redirect:false}
    }
    else if(action.type === SET_MESSAGE){
        return {...state,message:action.payload}
    }
    else if(action.type === REMOVE_MESSAGE){
        return {...state,message:""}
    }
    else if(action.type === UPLOAD_ERRORS){
        return {...state,uploadErrors:action.payload}
    }
    else if(action.type === REMOVE_ERRORS){
        return {...state,uploadrErrors:[]}
    }
    else{
        return state;
    }
};

export default UploadReducer