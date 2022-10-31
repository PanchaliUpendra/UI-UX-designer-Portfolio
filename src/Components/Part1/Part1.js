import React from 'react';
import img1 from '../Images/stand2.jpg';
import img2 from '../Images/part1img2.png';
import './Part1.css';
function Part1(props){
    return(
        <div  ref={props.divyapro} className='part1-container'>
            <div>
                <div className='part1-cont-div1'>
                    <p className='part1-cont-div1-p'>Hello, I am</p>
                    <h1>Palavalsa Divya</h1>
                    <h4>UI/UX & Product Designer</h4>
                    <p className='part1-cont-div1-p2'>I’m a top online marketer and branding expert, I started my career
                        by lauching the popular metaverse design, in just a few short
                        years, I built the brand to millions of social media followers and websites visitors.
                    </p>
                    <div className='part1-cont-div1-btns'>
                        <p className='part1-cont-div1-btns-p1'>Hire me</p>
                        <p className='part1-cont-div1-btns-p2'>Resume</p>
                    </div>
                </div>
                <div className='part1-comment'>
                    <div className='part1-div1-comt'>
                        <img src={img2} alt="img2" className='part1-div-comt-img2'/>
                        <div className='part1-div1-comt-p'>
                        <p className='part1-div1-comt-p1'>Phanny - Nigeria</p>
                        <p>Sat 28 May 2022</p>
                        </div>
                        
                    </div>
                    <p>
                    In just a few short years, I built the brand to millions of social media followers and websites visitors.
                    </p>
                </div>
            </div>
            <div>
                <img src={img1} alt="img1" className='part1-img1'/>
            </div>
            
        </div>
        
    );
}
export default Part1;