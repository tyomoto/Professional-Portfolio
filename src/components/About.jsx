import React from 'react';
import profilePic from '../assets/Self-portrait.jpg';

export default function AboutMe(){
    return (
        <div className="aboutMe-container">
            <h1>Tyler Omoto</h1>
            <img src={profilePic} alt="Tyler"/>
            <p>Hello! I'm Tyler Omoto, currently studying to be a certified full-stack developer with the University of Toronto full-stack coding bootcamp. I am looking to 
                leverage my business/marketing background to help bridge the gap between consumer/client and the technical side. Through the bootcamp I have learned the fundamentals
                of HTML, CSS, and Javascript, as well as some experience in NodeJS, Expressjs, SQL and React.  Through-out the course I have worked on developing my 
                problem solving and creativity while continuing to further develop my teamwork and organization skills. I have successfully completed several team projects in the class, that 
                all successfully run and allow for an easy user experience. The most recent project we built is a platform that allows for users to login and leave a review or comment on a movie. 
                It successfully joins the front-end and the back-end materials that we have learned throughout the bootcamp. I am excited to use my newly developed skills and leverage my business 
                background to help with improving user interaction. 
            </p>
        </div>
    )
}
