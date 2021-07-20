import { BOOKING_ERROR, CLOSE_LOADER, CONTACT_ERROR, REMOVE_MESSAGE,
     SET_IMAGE, SET_LOADER, SET_MESSAGE ,SET_OFFER,
     SET_OFFER_MESSAGE,REMOVE_OFFER_MESSAGE} from "../types/ContactTypes";
import { REMOVE_ERRORS } from "../types/uploadTypes";

const initState = {
    contactErrors:[],
    loading:false,
    message:"",
    offerMessage:'',
    bookingError:[],
    images : [],
    offer :[]
}

const ContactReducer =(state=initState,action)=>{
    if(action.type===SET_LOADER) return {...state,loading:true};
    else if(action.type===CLOSE_LOADER) return {...state,loading:false};
    else if(action.type===BOOKING_ERROR) return {...state,bookingError:action.payload};
    else if(action.type===CONTACT_ERROR) return {...state,contactErrors:action.payload};
    else if(action.type===REMOVE_ERRORS) return {...state,contactErrors:[],bookingError:[]};
    else if(action.type===SET_MESSAGE)  return {...state,message:action.payload};
    else if(action.type===REMOVE_MESSAGE) return {...state,message:""};
    else if(action.type===REMOVE_OFFER_MESSAGE) return {...state,offerMessage:""};
    else if(action.type===SET_IMAGE) return {...state,images:action.payload};
    else if(action.type===SET_OFFER) return {...state,offer:action.payload};
    else if(action.type===SET_OFFER_MESSAGE)  return {...state,offerMessage:action.payload};
    else return state;
}
export default ContactReducer

