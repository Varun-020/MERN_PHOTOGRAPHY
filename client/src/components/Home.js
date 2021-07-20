import React, { useEffect } from 'react';
import {Helmet} from 'react-helmet';
import Services from './Services';
import Testimonial from './Testimonial';
import About from './About';
import toast,{Toaster} from 'react-hot-toast';
import {useDispatch,useSelector} from 'react-redux';
import { REMOVE_MESSAGE } from '../store/types/ContactTypes';
import Showcase from './Showcase';
import Offer from './Offer';
import Footer from './Footer';

function Home() {
    const {message,offer}= useSelector(state => state.ContactReducer);
    const  dispatch = useDispatch();
    
    
    useEffect(()=>{
        if(message){
            toast.success(message);
            dispatch({type:REMOVE_MESSAGE})
        }
    },[message]);
    
    return (
        <>
        <Helmet>
            <title>Sudam Photography</title>
            <meta name="description" content="contact for hiring : Photpgrapher Videographer Web Developer @ Sudam Photography "/>
        </Helmet>
        <Toaster 
                    position = 'top-center' reverseOrder={false}
                    toastOptions = {{
                        style:{
                            fontSize:'14px',
                        },
                    }}
        />
        <section className='hero'>
            <div className="container1">
                <div className="left">
                    <p className="subheading">I'm Sudam</p>
                    <h2 className="heading">
                        <div className="wrapper"><span>Work That</span></div>
                        <div className="wrapper"><span>Everyone</span></div>
                        <div className="wrapper"><span>Love</span></div>
                    </h2>
                    <p className="description">Looking for a Photographer , Videography,Editing and Web Development click below to book us for a service you need and we provide.</p>
                    <div className="button">
                        <a href="/booking" className="primary-btn">Book Here</a>
                    </div>
                </div>
                <div className="right">
                    <img src="/images/home.jpg" alt="camera" />
                </div>
            </div>
        </section>
        <Showcase />
        <Offer />
        <Services />
        <Testimonial/> 
        <About />  
        <Footer /> 
            
        </>
    )
}

export default Home
