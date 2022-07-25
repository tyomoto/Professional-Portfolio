import React, {useState} from 'react'
import Nav from './components/Navbar'
import AboutMe from './components/AboutMe'
import Projects from './components/Project'
import Footer from './components/Footer'
import Resume from './components/Resume'
import Contact from './components/Contact'

function PageLoader(){
    const [currentPage, setCurrentPage] = useState('AboutMe')

    const renderPage = () => {
        if (currentPage === "AboutMe") {
            return <AboutMe />;
        }
          if (currentPage === "Contact") {
            return <Contact />;
        }
          if (currentPage === "Project") {
            return <Projects />;
        }
          if (currentPage === "Resume") {
            return <Resume />;
        }
    };
    const handlePageChange = (page) => setCurrentPage (page);

    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer/>
        </div>
    )
}

export default PageLoader