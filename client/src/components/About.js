import React from 'react'

function About() {
    return (
        <div className="about">
            <div className="container2">
                <h2 className="about-heading">About</h2>
                <div className="wrapper">
                    <div className="left">
                        <div className="about-card">
                        <div className="card-img">
                            <img src="/images/logo.png" alt="about " />
                        </div>
                        <p className="card-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur voluptatem ex id dignissimos, illo aliquam tempore, eaque error ab perferendis minima. Dicta ut velit veritatis, necessitatibus doloremque praesentium molestiae animi?</p>
                        <h3 className="card-name">Sudam Tudu</h3>
                        <p className="card-subtitle">Photographer</p>
                        </div>
                        
                    </div>
                    <div className="right">
                        <p className="sub-heading">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, velit?
                        </p>
                        <h2 className="slogan">
                            "If You don't use it ,You loose it"
                        </h2>
                        <p className="right-text">
Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <div className="buttons">
                            <a href="/booking" className="primary-btn">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
