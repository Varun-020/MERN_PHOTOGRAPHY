import React from 'react'

const images = [
    {
        id:1,name:'1.jpg',
    },
    {
        id:2,name:'2.jpg',
    },
    {
        id:3,name:'3.jpg',
    },
    {
        id:4,name:'4.jpg',
    },
]
function Showcase() {
    return (
    <div className="showcase mt-70">
        <div className="container">
            <div className="col-12">
                <div className="showImages">
                {
                    images.map(pic=>(
                        <div className="show_image" key={pic._id}>
                            
                                <img src={`/images/${pic.name}`} alt={pic.image} />
                          
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    </div>
    )
}

export default Showcase
