//import react from 'react'
import * as React from 'react';

export default function MainContent(){
    return (
        <main>
        
            <div className="developer-info">
                <h2>Laura Smith</h2>
                <h3>Frontend Developer</h3>
                <p>laurasmith.website</p>
            </div>
            
            <div className= "contacts-btn">
            
                <button className= "primary-btn button-one">
                    <img src="./Mail.png" className="button-img"/> 
                    <a href="#">Email</a>
                </button>
                
                <button className= "primary-btn button-two">
                    <img src="./linkedin.png" className="button-img"/>
                    <a href="#">Linkedin</a>
                </button>
            </div>
            
        </main>
    )
}