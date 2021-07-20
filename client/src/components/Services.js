import React from 'react'

function Services() {
    return (
        <section className="services">
            <div id="home" className="container2">
                <h2 className="section-heading">
                    services
                </h2>
                <div className="service-all-items">
                    <div className="service-item">
                        <div className="service-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="1" 
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        </div>
                        <h3 className="service-item-heading">
                            Photography & Editing
                        </h3>
                        <p className="service-item-description">
                            We provide Photography for Wedding ,Portfolio
                            and for ocassional shoots. We also provide Editing services
                            for Pictures and Videos.
                        </p>
                    </div>
                    <div className="service-item">
                        <div className="service-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
</svg>
                        </div>
                        <h3 className="service-item-heading">
                           Videography 
                        </h3>
                        <p className="service-item-description">
                            We provide Videographer for any ocassions and
                            also for films and weddings.
                            We provide Editing services also for videos.
                        </p>
                    </div>
                    <div className="service-item">
                        <div className="service-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
                        </div>
                        <h3 className="service-item-heading">
                        Web Development
                        </h3>
                        <p className="service-item-description">
                            We provide web development service which help individual
                            and business have their online identity and for their need.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
