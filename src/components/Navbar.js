import React from 'react';
import "../styles/Navbar.css"

export default function Nav({currentPage, handlePageChange}) {
    return(
        <div className='navigation'>
            <nav>
                <div className='nav-name'>
                    <a href="#AboutMe" onClick={() => handlePageChange('AboutMe')} className={currentPage === 'AboutMe' ? 'active' : 'nav'}> Tyler Omoto</a>
                </div>
                <div className = 'nav-anchors-container'>
                    <a href="#AboutMe" onClick={() => handlePageChange('AboutMe')} className={currentPage === 'AboutMe' ? 'active' : 'nav'}> About Me</a>
                    <a href="#Portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'active' : 'nav'}> Portfolio</a>
                    <a href="#Contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'active' : 'nav'}> Contact</a>
                    <a href="#Contact" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'active' : 'nav'}> Resume</a>
                </div>
            </nav>
        </div>
  );
}