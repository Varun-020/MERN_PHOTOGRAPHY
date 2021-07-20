import React from 'react'
import Bgimage from './Bgimage';
import {Helmet} from 'react-helmet';
import {useState,useEffect} from  'react';
import {useSelector,useDispatch} from 'react-redux';
import {postLogin} from '../store/asyncMethods/AuthMethods';
import toast,{Toaster} from 'react-hot-toast';


function Login(props) {
    const dispatch = useDispatch();
     const {loginErrors,loading,user} = useSelector(state=> state.AuthReducer);
    const [state,setState] = useState({
        email:'',
        password:'',
    });
    const handleInputs = (e)=>{
        setState({ ...state,[e.target.name]:e.target.value })
    }
    const userLogin = async e => {
        e.preventDefault();
        dispatch(postLogin(state));
    }
    useEffect(()=>{
        if(loginErrors?.length > 0){
            loginErrors.map((error)=>toast.error(error.msg));
        }
        
        // if (user) {
		// 	props.history.push('/dashboard');
		// }
    },[loginErrors,user])
    return (
        <>
        <Helmet>
            <title>User Login</title>
            <meta name="description" content=" user login to access all blogs are here this is the homepage html css js react mongodb express nodejs "/>
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
                        <form onSubmit={userLogin} > 
                            <div className="group">
                                <h3 className="form-heading">Login</h3>
                            </div>                           
                            <div className="group">
                                <input type="email" name="email" value={state.email} onChange={handleInputs} placeholder="abc@example.com" className="group__control"/>
                            </div>
                            <div className="group">
                                <input type="password" name="password" value={state.password} onChange={handleInputs}  placeholder="Enter Password" className="group__control"/>
                            </div>
                            <div className="group">
                                <input type="submit" value={loading ? '...':'Login'} className="btn btn-default btn-block"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>  
        </>
    )
}

export default Login
