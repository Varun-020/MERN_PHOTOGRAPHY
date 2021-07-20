import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { fetchOffer } from '../store/asyncMethods/ContactMethod';

function Offer() {

    const  dispatch = useDispatch();
    const {offer} = useSelector(state=>state.ContactReducer);

    useEffect(() => {
        dispatch(fetchOffer());
    }, []);
    return (
        <>
            {offer.length > 0 ? 
            <div className="offer">
                    <div className="offer_container">   
                    <h2 className="offer_heading">
                        Offer
                    </h2>
                    <div className="offer-section">
                        {offer.map(ind=>(
                            <img src={`/images/offer/${ind.name}`} alt="offer image" />
                        ))}
                        
                    </div>
                    </div>
            </div> : ""}
        </>
    )
}

export default Offer
