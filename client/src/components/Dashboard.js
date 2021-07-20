import React , {useState , useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import toast, {Toaster} from 'react-hot-toast';
import Loader from "./Loader";
import { uploadImageAction } from '../store/asyncMethods/UploadMethods';
import {Helmet} from 'react-helmet';
import { REDIRECT_FALSE, REMOVE_ERRORS, REMOVE_MESSAGE } from '../store/types/uploadTypes';

function Dashboard(props) {

    const  dispatch = useDispatch();
    const {loading,uploadErrors,redirect,message} = useSelector(state=>state.UploadReducer);

    const [currentImage,setCurrentImage]  = useState('Choose Image');
    const [state,setState] = useState('')
    const [imagePreview,setImagePreview] = useState('');
    const fileHandle = e =>{
        setState(e.target.files[0])
        if(e.target.files.length !== 0){
            setCurrentImage(e.target.files[0].name); 
            const reader = new FileReader();
            reader.onloadend=()=>{
            setImagePreview(reader.result);
            }
            reader.readAsDataURL(e.target.files[0]); 
        } 
    }
    const uploadImage=e=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('images',state)
        dispatch(uploadImageAction(formData));

    }
    useEffect(()=>{
        setImagePreview('')
        setState('')
        setCurrentImage("Choose Image")
        if(uploadErrors?.length > 0){
            uploadErrors.map(error=>toast.error(error.msg));
            dispatch({type:REMOVE_ERRORS})
        }
        if(redirect){
            props.history.push('/dashboard');
            dispatch({type:REDIRECT_FALSE})
        }
        if(message){
            toast.success(message)
            dispatch({type:REMOVE_MESSAGE})
        }
        
    },[uploadErrors,redirect]);

    return (
        <div className="create mt-70">
            <Helmet>
            <title>Admin-Upload Image</title>
            <meta name="description" content="Image uploader from admin side"/>
            </Helmet>
            <Toaster 
                    position = 'top-center' reverseOrder={false}
                    toastOptions = {{
                        style:{
                            fontSize:'14px',
                        },
                    }}
                   />
            {!loading ? <div className="container">
                <form onSubmit={uploadImage}>
                <div className="row ml-minus-15 mr-minus-15">
                    <div className="col-6 p-15">
                        <div className="card">
                            <h3 className="card__h3">Upload Image</h3>            
                                <div className="group">
                                    <label className="image__label" htmlFor="image">{currentImage}</label>
                                    <input type="file"  id="image" name="image" 
                                        className="group__control" onChange={fileHandle} placeholder=""/>
                                </div>
                                
                                <div className="group">
                                    <input type="submit" value="Upload" className="btn btn-default btn-block"/>
                                </div> 
                                <div className="navigation">
                                    <div className="group">
                                        <a href="/setoffer" className="btn btn-default btn-block" 
                                        style={{backgroundColor: "blue"}}>Set Offer</a>
                                    </div>                                                  
                                    <div className="group">
                                        <a href="/admingallery" className="btn btn-default btn-block" 
                                        style={{backgroundColor: "blue"}}>Admin gallery</a>
                                    </div> 
                                </div>                                                 
                                                                                 
                        </div>   
                    </div> 
                    <div className="col-6 p-15">
                    <div className="box">
                        <div className="imagePreview">
                            {imagePreview ? <img src={imagePreview} alt=' here'/>: ''}
                        </div>
                    </div>
                    </div>                       
                </div>    
            </form>
            </div> : <Loader/>         } 
        </div>
    )
}

export default Dashboard
