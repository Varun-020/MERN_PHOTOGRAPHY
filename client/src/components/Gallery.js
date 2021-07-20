import React,{useEffect} from 'react'
import {Helmet} from 'react-helmet';
import {useDispatch,useSelector} from 'react-redux';
import { galleryAction } from '../store/asyncMethods/ContactMethod';
import { SRLWrapper } from "simple-react-lightbox";

function Gallery() {
    const options = {
        buttons: {
          backgroundColor: 'rgba(30,30,36,0.8)',
          iconColor: 'rgba(255, 255, 255, 0.8)',
          iconPadding: '10px',
          showAutoplayButton: false,
          showCloseButton: true,
          showDownloadButton: false,
          showFullscreenButton: true,
          showNextButton: true,
          showPrevButton: true,
          showThumbnailsButton: true,
          size: '40px'
        },
        caption: {
            showCaption: false
        }
    }
    const dispatch = useDispatch()
    const {images} = useSelector(state=>state.ContactReducer);
    console.log(images)
    useEffect(()=>{
        dispatch(galleryAction());
    },[]);
    
    return (
        <>
        <Helmet>
            <title>Sudam Photography Gallery</title>
            <meta name="description" content="Sudam Photography Gallery "/>
        </Helmet>
        
        <SRLWrapper options={options}>
        <div className="gallery mt-50">
        
            <div className="container">
                <div className="col-12">
                <div className="gallery_view">
                {
                    images.map(pic=>(
                        <div className="gallery_view_image" key={pic._id}>
                            <a href={`/images/${pic.image}`}>
                                <img src={`/images/${pic.image}`} alt={pic.image} />
                            </a>
                        </div>
                    ))
                }
                </div>
                </div>
            </div>
        </div>
        </SRLWrapper>
        </>   
    )
}

export default Gallery

