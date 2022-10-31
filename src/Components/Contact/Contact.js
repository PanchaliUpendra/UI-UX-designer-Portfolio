import React from 'react';
import './Contact.css';
function Contact(props){
    return(
        <div ref={props.contme}>
        <div className='contact_container'>
            <div>
                <h1>Divya</h1>
                <p>is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum </p>
            </div>
            <div>
                <h3>EXPLORE</h3>
                <p>SUPPORTS</p>
                <p>ABOUT US</p>
                <p>BLOG</p>
            </div>
            <div>
                <h3>LEGAL</h3>
                <p>TERMS OF USE</p>
                <p>PRIVACY POLICY</p>
            </div>
            <div>
                <h3>SOCIALS</h3>
                <p>TWITTER</p>
                <p>LINKEDIN</p>
                <p>INSTAGRAM</p>
            </div>
        </div>
        <div className='contactus_ending'>

        </div>
        </div>
    );
}
export default Contact;