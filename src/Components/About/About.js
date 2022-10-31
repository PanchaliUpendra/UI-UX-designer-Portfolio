import React from 'react';

import badge1 from '../Images/badge1.png';
import plank1 from '../Images/plank1.png';
import customer from '../Images/customer.png';
import site1 from '../Images/site1.png';

import './About.css';
function About(props){
    return(
        <div ref={props.navaboutme} className='about-container'>
            <div>
                <img src={site1} alt="site1" className='about-site1'/>
            </div>
            <div>
                <div className='about-container-bit-aboutme'>
                    <p className='about-container-bit-aboutmep1'>A BIT</p>
                    <h1>About Me</h1>
                    <p className='about-container-bit-aboutmep2'>
                    I’m a top online marketer and branding expert, I started my career
                    by lauching the popular metaverse design, in just a few short
                    years, I built the brand to millions of social media followers and 
                    websites visitors. I also created award-winning online products with 
                    millions of dolloars in online sales you want, you never get personalized 
                    experiences and they can be upwards of $1000 on hour. 
                    </p>
                </div>
                <div className='about-all-badges1'>
                    <div className='about-badg1'>
                    <img src={badge1} alt='badge'className='about-badge1'/>
                    <div>
                        <p className='about-container-bit-aboutmep1'>5 year+</p>
                        <p>Experience</p>
                    </div>
                    </div>
                    <div className='about-badg1'>
                    <img src={plank1} alt='plank1'className='about-badge1'/>
                    <div>
                        <p className='about-container-bit-aboutmep1'>700+</p>
                        <p>Projects</p>
                    </div>
                    </div>
                </div>
                <div className='about-badg1'>
                <img src={customer} alt='customer'className='about-badge1'/>
                    <div>
                        <p className='about-container-bit-aboutmep1'>24/7</p>
                        <p>customer support</p>
                    </div>
                </div>
                <div className='about-hire-buttons'>
                    <p>Hire me</p>
                    <p>Download cv</p>
                </div>
            </div>
        </div>
    );
}
export default About;