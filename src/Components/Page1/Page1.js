import React from 'react';
import './Page1.css';
function Page1(props){
    return(
        <div className='page1_container'>
            <div className='page1-container-li'>
                <h1 onClick={()=>props.divyapro.current.scrollIntoView({behavior:"smooth", block: "end", inline:"nearest"})}>Divya</h1>
                <ul>
                    <li onClick={()=>props.navaboutme.current.scrollIntoView({behavior:"smooth", block: "end", inline:"nearest"})}>About me</li>
                    <li onClick={()=>props.navserv.current.scrollIntoView({behavior:"smooth", block: "end", inline:"nearest"})}>services</li>
                    <li onClick={()=>props.testimo.current.scrollIntoView({behavior:"smooth", block: "start", inline:"nearest"})}>Testimonials</li>
                    <li onClick={()=>props.contme.current.scrollIntoView({behavior:"smooth", block: "end", inline:"nearest"})}>Contact Me</li>
                </ul>
                <p>Hire me</p>
            </div>
        </div>
    );
}
export default Page1;