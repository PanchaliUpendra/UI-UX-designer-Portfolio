import React from 'react';
import './Projects.css';

import img1 from '../Images/studies1.png';
import img2 from '../Images/studies2.png';
import img3 from '../Images/studies3.png';

function Projects(){
    return(
        <div className='projects_container'>
            <div className='projects_studies_header'>
                <h3>CASE STUDY</h3>
                <h1>My Case Studies</h1>
            </div>
            <div className='projects_studies_part1'>
                <img src={img1} alt='img1' className='projects_studies_img'/>
                <div className='projects_studies_part1_div'>
                    <h3>01</h3>
                    <h1> Bakery Landing Page Design</h1>
                    <p>when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book. It has 
                        survived not only five centuries, but also the leap 
                        into electronic typesetting, remaining essentially 
                        unchanged.</p>
                    <h4 className='projects_studies_details'>Details</h4>
                </div>
            </div>
            <div className='projects_studies_part1'>
            <div className='projects_studies_part1_div'>
                    <h3>02</h3>
                    <h1>Shoe Store Ecommerce Landing Page</h1>
                    <p>when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book. It has 
                        survived not only five centuries, but also the leap 
                        into electronic typesetting, remaining essentially 
                        unchanged.</p>
                    <h4 className='projects_studies_details'>Details</h4>
                </div>
                <img src={img2} alt='img2' className='projects_studies_img'/>
                
            </div>
            <div className='projects_studies_part1'>
                <img src={img3} alt='img3' className='projects_studies_img'/>
                <div className='projects_studies_part1_div'>
                    <h3>03</h3>
                    <h1>ClearMix Landing page</h1>
                    <p>when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book. It has 
                        survived not only five centuries, but also the leap 
                        into electronic typesetting, remaining essentially unchanged.</p>
                    <h4 className='projects_studies_details'>Details</h4>
                </div>
            </div>

        </div>
    );
}
export default Projects;