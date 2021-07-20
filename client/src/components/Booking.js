import React,{useState,useEffect} from 'react';
import {Helmet} from 'react-helmet';
import {useHistory} from 'react-router-dom';
import toast,{Toaster} from 'react-hot-toast';
import {useDispatch,useSelector} from 'react-redux';
import Bgimage from './Bgimage';
import DatePicker from 'react-date-picker';
import { BookingAction } from '../store/asyncMethods/ContactMethod';
import { REDIRECT_FALSE ,REMOVE_ERRORS } from '../store/types/uploadTypes';



function Booking() {
    const {push} = useHistory();
    const  dispatch = useDispatch();
    const {loading,bookingError} =useSelector(state=>state.ContactReducer);
    const {redirect} = useSelector(state => state.UploadReducer);
    const [date,setDate] = useState('');
    const [state,setState] =useState({
        name:'',
        email:"",
        contact:"",
        address:""
    });
    const handleInput=(e)=>{
        setState({...state,[e.target.name]:e.target.value});
    };
    const userBooking =(e)=>{
        e.preventDefault();
        const {name,email,contact,address} = state;
        const data ={
            name:name,email:email,contact:contact,address:address,date:date
        }
        dispatch(BookingAction(data));
    };

    useEffect(()=>{
        console.log(bookingError)
        if(bookingError?.length > 0){
            bookingError.map(error=>toast.error(error.msg));
            dispatch({type:REMOVE_ERRORS});
            
        }
        if(redirect){
            push('/')
            dispatch({type:REDIRECT_FALSE});
        }    
    },[bookingError,redirect]);

    return (
        <>
            <Helmet>
            <title>Booking Form</title>
            <meta name="description" content="user can Book us for their Photoshoot and videography and web development "/>
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
                        <form onSubmit={userBooking} > 
                            <div className="group">
                                <h3 className="form-heading">Book Now</h3>
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
                                    <label htmlFor="address">Address</label>
                                    <input type="text" value={state.address} onChange={handleInput} id="address" name="address" 
                                        className="group__control" placeholder="address here..."/>
                                </div>

                                <div className="group">
                                <label htmlFor="date">Date</label>
                                <DatePicker
                                    onChange={setDate}
                                    value={date}
                                />
                                </div>
                                                               
                            <div className="group">
                                <input type="submit" value={loading ?"..." :"Book Us Now" } className="btn btn-default btn-block"/>
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

export default Booking 
