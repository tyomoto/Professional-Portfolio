import React from 'react';
import '../styles/Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
    return(
       <div className='footer'>
            <p>
                <a href="https://github.com/tyomoto" target = "_blank" rel = "noreferrer">
                    <GitHubIcon color = "action" fontSize = "large"/>
                </a>
                <a href="https://www.linkedin.com/in/tyleromoto/" target = "_blank" rel = "noreferrer">
                    <LinkedInIcon color = "action" fontSize = "large"/>
                </a>
                <EmailIcon color= "action" fontSize = "large"/> : tyler.omoto@gmail.com
        </p>
       </div> 
    )
}