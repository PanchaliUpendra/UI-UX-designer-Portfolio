import React from 'react';
import './Portfolio.css';

import img1 from '../Images/portfolio1.png';
import img2 from '../Images/portfolio2.png';
import img3 from '../Images/portfolio3.png';
import img4 from '../Images/portfolio4.png';

import backgroundlast from '../Images/backgroundlast.png';

import commentimg from '../Images/endimg.png';

import slack from '../Images/slack.png';
import google from '../Images/google.png';
import dropbox from '../Images/dropbox.png';
import tesla from '../Images/tesla.png';

function Portfolio(props){

    return(
        <div ref={props.testimo}>
            <div className='portfolio_div1'>
                <h3>PORTFOLIO</h3>
                <h1>People Lie Work Don’t</h1>
            </div>
            <div className='portfolio_div2'>
                <p>Explore All Services</p>
            </div>
            <div >
                <div className='portfolio_div_images'>
                <img src={img1} alt="img1" className='portfolio_div_images_each'/>
                <img src={img2} alt="img2" className='portfolio_div_images_each'/>
                </div>
                <div className='portfolio_div_images'>
                <img src={img3} alt="img3" className='portfolio_div_images_each' />
                <img src={img4} alt="img4" className='portfolio_div_images_each' />
                </div>
            </div>
            <div>
                <div className='testimonials_header'>
                    <h3>TESTIMONIALS</h3>
                    <h1>What People Says</h1>
                </div>
                <div className='testimonials_backgrounds'>
                    <div className='testimonials_1st_background'>
                    </div>
                    <img src={backgroundlast} alt='backgroundlast' className='backgroundlast_tesimonials'/>
                </div>
                <div className='total_comment_of_testimonials'>
                    <div className='comment_portfolio_testimonials'>
                        <img src={commentimg} alt="comment img" className='testimonials_comment_img'/>
                        <p> is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s</p>
                        <h3>Karmani</h3>
                        <p>FOUNDER AND CEO OF KARMANI</p>
                        <div className='coment_img_btns'>
                                <p>left</p>
                                <p>right</p>
                        </div>
                        
                    </div>
                </div>

            </div>
            <div className='ourclients_header'>
                <h3>OUR CLIENTS</h3>
                <h1>Who Makes Me Proud</h1>
            </div>
            <div className='ourclients_images'>
                <img src={slack} alt="slack" className='ourclients_images_each'/>
                <img src={dropbox} alt="dropbox" className='ourclients_images_each'/>
                <img src={google} alt="google" className='ourclients_images_each'/>
                <img src={tesla} alt="tesla" className='ourclients_images_each3'/>
            </div>
        </div>
    );
}

export default Portfolio;