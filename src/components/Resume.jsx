import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import '../styles/Resume.css'
import { grey } from "@mui/material/colors"

function Resume() {
    return (
        <div className="resume-container">
            <h3>Programming Skills</h3> 
            <div className="front-end">
                <h4>Front End</h4>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Bulma</li>
                </ul>
            </div>
            <div className="back-end">
                <h4>Back End</h4>
                <ul>
                    <li>APIs</li>
                    <li>NodeJs</li>
                    <li>Express</li>
                    <li>MySQL and Sequelize</li>
                    <li>MongoDB</li>
                    <li>MERN applications</li>
                </ul>
            </div>
            <a href="" target='_blank' rel ='norefferer'>
                <DownloadIcon sx={{ color: grey["A100"] }} fontSize = "large"/>
            Download Resume</a>
        </div>
        
    )
}

export default Resume