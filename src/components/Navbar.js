import React from 'react';

export default function Nav({currentPage, handlePageChange}) {
    return(
        <div className='navigation'>
            <nav>
                <header className= 'header'>
                    <h1>Tyler Omoto</h1>
                </header>
                
                <a href="#AboutMe" onClick={() => handlePageChange('AboutMe')} className={currentPage === 'AboutMe' ? 'active' : 'nav'}> About Me</a>
                <a href="#Projects" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'active' : 'nav'}> Projects</a>
                <a href="#Contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'active' : 'nav'}> Contact</a>
                <a href="#Contact" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'active' : 'nav'}> Resume</a>
            </nav>
        </div>
  );
}