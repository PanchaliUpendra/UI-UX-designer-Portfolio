import React from 'react';
import Service1 from '../Images/service1.png';
import Service2 from '../Images/service2.png';
import Service3 from '../Images/service3.png';
import './Services.css';
function Services(props){
    return(
        <div ref={props.navserv} className='service_container_group'>
            <div className='services_header'>
                <p>SERVICES</p>
                <h1>Check My Services</h1>
            </div>
            <div className='sercices_explore_all'>
                <p>Explore All Services...</p>
            </div>
            <div className='services_all_container'>
                <div className='service_img_with_all'>
                    <img src={Service1}alt='img1' className='services_services123'/>
                    <h3>Landing Page Design</h3>
                    <p> is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever 
                        since the 1500s</p>

                </div>
                <div className='service_img_with_all'>
                <img src={Service2} alt='img2' className='services_services123'/>
                    <h3>Mobile App Design</h3>
                    <p>  is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard 
                        dummy text ever since the 1500s</p>

                </div>
                <div className='service_img_with_all'>
                <img src={Service3} alt='img3' className='services_services123'/>
                    <h3>Branding</h3>
                    <p>  is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard 
                        dummy text ever since the 1500s</p>

                </div>
            </div>
        </div>
    )
}
export default Services;