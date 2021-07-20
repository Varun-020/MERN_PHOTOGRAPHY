import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux";
import toast,{Toaster} from 'react-hot-toast';
import Bgimage from './Bgimage'
import Helmet from "react-helmet"
import { PostContact } from '../store/asyncMethods/ContactMethod';
import { REMOVE_ERRORS } from '../store/types/uploadTypes';
import { SET_MESSAGE } from '../store/types/ContactTypes';


function Contact() {
    const  dispatch = useDispatch();
    const {loading,contactErrors,message} = useSelector(state=>state.ContactReducer);
    const [state,setState]=useState({
        name:"",
        email:"",
        contact:"",
        subject:"",
        message:""
    });

    const handleInput=(e)=>{
        setState({...state,[e.target.name]:e.target.value});
    };
    
    const userContact =(e)=>{
        e.preventDefault();
        const contactData ={
            name:state.name,
            email:state.email,
            contact:state.contact,
            subject:state.subject,
            message:state.message
        }
        dispatch(PostContact(contactData));

    };
    useEffect(()=>{
        if(contactErrors?.length > 0){
            contactErrors.map(error=>toast.error(error.msg));
            dispatch({type:REMOVE_ERRORS});
        }
        if(message){
            toast.success(message);
            dispatch({type:SET_MESSAGE})
        }
    },[contactErrors,message]);
    return (
        <>
            <Helmet>
            <title>Contact Form</title>
            <meta name="description" content="user can contact us for their query "/>
        </Helmet>
            <div className="row " style={{display:'flex'}} >
               
                  <Toaster 
                    position = 'top-center' reverseOrder={false}
                    toastOptions = {{
                        style:{
                            fontSize:'14px',
                        },
                    }}
                    />
                    <div className="col-6 mt-50 ">
                        <Bgimage />
                    </div>
                    <div className="col-6 ">    
                <div className="card">
                <div className="account">
                    
                    <div className="account__section">
                        <form onSubmit={userContact} > 
                            <div className="group">
                                <h3 className="form-heading">Contact Us</h3>
                            </div>
                                <div className="group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" value={state.name} onChange={handleInput} id="name" name="name" 
                                        className="group__control" placeholder="eg. John Doe"/>
                                </div>
                                
                                <div className="group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" value={state.email} onChange={handleInput} id="email" name="email" 
                                        className="group__control" placeholder="abc@example.com"/>
                                </div>
                                
                                <div className="group">
                                    <label htmlFor="contact">Contact</label>
                                    <input type="text" value={state.contact} onChange={handleInput} id="contact" name="contact" 
                                        className="group__control" placeholder="eg. 987654321"/>
                                </div>
                                
                                <div className="group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" value={state.subject} onChange={handleInput} id="subject" name="subject" 
                                        className="group__control" placeholder="Subject here..."/>
                                </div>
                                
                                <div className="group">
                                    <label htmlFor="message">Message</label>
                                    <textarea cols='30' row='10' maxLength='500' defaultValue={state.message}
                                     name="message" id="message" 
                                    className="group__control" placeholder="Write description.."
                                     onChange={handleInput} >
                                    </textarea>
                                    <p className="length">{state.message?state.message.length : 0}</p>
                                </div>
                            <div className="group">
                                <input type="submit" value={loading ? "..." :"Submit"}  className="btn btn-default btn-block"/>
                            </div>
                        </form>
                    </div>
                </div>

                </div>
                
            </div>
        </div>
                    
        </>
        
    )
}

export default Contact
