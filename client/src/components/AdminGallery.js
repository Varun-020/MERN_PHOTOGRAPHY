import React,{useEffect} from 'react'
import {Helmet} from 'react-helmet';
import {useDispatch,useSelector} from 'react-redux';
import { galleryAction } from '../store/asyncMethods/ContactMethod';
import { SET_LOADER ,SET_MESSAGE,CLOSE_LOADER, REMOVE_MESSAGE} from '../store/types/ContactTypes';
import axios from 'axios';
import toast,{Toaster} from 'react-hot-toast';

function AdminGallery() {
    
    const dispatch = useDispatch()
    const {images,message} = useSelector(state=>state.ContactReducer);
    const {token} = useSelector(state=>state.AuthReducer);

    const deleteImage = async (id) => {
		const confirm = window.confirm('Are you really want to delete this Image ?');
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
				} = await axios.get(`/deleteimage/${id}`, config);
				dispatch(galleryAction());
				dispatch({ type: SET_MESSAGE, payload: msg });
			} catch (error) {
				dispatch({ type: CLOSE_LOADER });
				console.log(error);
			}
		}
	};
    useEffect(()=>{
        dispatch(galleryAction());    
    },[message]);

    useEffect(()=>{
        if(message){
            toast.success(message);
            dispatch({type:REMOVE_MESSAGE});
        }
    },[message])
    return (
            <>
            <Helmet>
                <title>Sudam Photography Gallery</title>
                <meta name="description" content="Sudam Photography Gallery "/>
            </Helmet>
            <Toaster 
                    position = 'top-center' reverseOrder={false}
                    toastOptions = {{
                        style:{
                            fontSize:'14px',
                        },
                    }}
            />
            
            
            <div className="gallery mt-50">
            
                <div className="container">
                    <div className="col-12">
                        <div className="admin_gallery">
                            {
                                images.map(pic=>(
                                    <div className="wrap">
                                        <div className="wrap_image" key={pic._id}>                                        
                                            <img src={`/images/${pic.image}`} alt={pic.image} />                                       
                                        </div>
                                        <div className="delete" >
                                            <i  onClick={() => deleteImage(pic._id)} class="fas fa-trash-alt"></i>
                                        </div>
                                    </div>
                                    
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            
            </>   
    )
}

export default AdminGallery





