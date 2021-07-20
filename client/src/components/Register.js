import React from 'react'
import Bgimage from './Bgimage'
import toast,{Toaster} from 'react-hot-toast';
import {Helmet} from 'react-helmet';
import {useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { postRegister } from '../store/asyncMethods/AuthMethods';

function Register(props) {
    const [state,setState] = useState({
        name:'',
        email:'',
        password:'',
    });
    const dispatch = useDispatch();
    const {loading,registerErrors,user} = useSelector((state) => state.AuthReducer);
    const handleInputs = (e)=>{
        setState({ ...state,[e.target.name]:e.target.value })
    }
    const userRegister = async (e) => {
        e.preventDefault();
        dispatch(postRegister(state));
        
    }
    useEffect(() => {
		if (registerErrors?.length > 0) {
			registerErrors.map((error) => toast.error(error.msg));
		}
        if(user){
            props.history.push('/dashboard')
        }
	}, [registerErrors, user]);
    
    return (
        <>
        <Helmet>
            <title>User Register</title>
            <meta name="description" content="user registration page to see all blogs are here this is the homepage html css js react mongodb express nodejs "/>
        </Helmet>
            <div className="row mt-50">
                <div className="col-8">
                  <Bgimage/>
                  <Toaster 
                    position = 'top-right' reverseOrder={false}
                    toastOptions = {{
                        style:{
                            fontSize:'14px',
                        },
                    }}
                  />
                </div>
                <div className="col-4">
                <div className="account">
                    <div className="account__section">
                        <form onSubmit={userRegister} > 
                            <div className="group">
                                <h3 className="form-heading">Register</h3>
                            </div>
                            <div className="group">
                                <input type="text" name="name" value={state.name} onChange={handleInputs} placeholder="eg: John Doe" className="group__control"/>
                            </div>
                            <div className="group">
                                <input type="email" name="email" value={state.email} onChange={handleInputs} placeholder="abc@example.com" className="group__control"/>
                            </div>
                            <div className="group">
                                <input type="password" name="password" value={state.password} onChange={handleInputs}  placeholder="Enter Password" className="group__control"/>
                            </div>
                            <div className="group">
                                <input type="submit" value={!loading ?"Register" : "..."}  className="btn btn-default btn-block"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Register
