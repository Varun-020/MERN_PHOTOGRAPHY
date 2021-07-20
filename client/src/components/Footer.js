import React from 'react'

function Footer() {
    return (
        <div className="footer ">
            <div className="container">
            <div className="wrapper">
                <div className="left">
                <li>
                <a href="https://www.facebook.com/SudamPhotography/" target="_blank"><i class = "fab fa-facebook"></i></a>
            </li>
            <li>
                <a href="https://twitter.com/Sudamphotograph?s=09" target="_blank"><i class = "fab fa-twitter"></i></a>
            </li>
            <li>
                <a href="https://www.instagram.com/Sudam_Photography" target="_blank"><i class = "fab fa-instagram"></i></a>
            </li>
                </div>
                <div className="right">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Terms n Condition</a></li>
                    <li><a href="#">Disclaimer</a></li>
                </div>
            
            </div>
            <div className="copy">
            <p> &copy; 2021-22, sudamphotography </p>
            <p> made by- Varun Mishra +91 8459881535</p>
            </div>
            </div>
        </div>
    )
}

export default Footer
