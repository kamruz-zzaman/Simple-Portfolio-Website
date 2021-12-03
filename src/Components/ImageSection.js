import React from 'react';
import cover from '../img/cover.png';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={cover} alt="" />
            </div>
            <div className="about-info">
                <h4>I am<span> Kamruzzaman</span></h4>
                <p className="about-text">
                    I am a react developer and I’m student of BSc in CSE. I am working very passionate about
                    programming. I love to explore new programming technologies and try to apply in my projects. I am
                    always wanting to do my best about the UI and UX of my projects. I'm always eager to learn from
                    anyone and everyone
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                        <p>Date and Place of Birth </p>
                    </div>
                    <div className="right-section">
                        <p>: Kamruzzaman</p>
                        <p>: 21</p>
                        <p>: Bangladeshi (By Birth)</p>
                        <p>: Bangali, English</p>
                        <p>: Narisha,Dohar,Dhaka-1332</p>
                        <p>: Bangladesh</p>
                        <p>: 15th November 2000</p>
                    </div>
                </div>
                <a href='./../Resume/Resume of Kamruzzaman.pdf' download='' ><button className="btn">Download Cv</button></a>
            </div>
        </div>
    )
}

export default ImageSection;
