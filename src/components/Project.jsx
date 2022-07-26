import React from 'react';
import BreweryNearMePic from '../assets/BreweryNearMe.png';
import ExpressMoviesPic from '../assets/ExpressMovies.PNG';
import EmployeeTrackerPic from '../assets/EmployeeTracker.PNG';
import TeamProfileGeneratorPic from '../assets/TeamProfileGenerator.PNG';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const projectData = [
    {
        title: 'BreweryNearMe',
        image: BreweryNearMePic,
        info: 'This project uses a 3rd party API to search for a Brewery near the users location, their past search history will also be displayed on the left!',
        repo: "https://tyomoto.github.io/potential-meme/",
        deployed: "https://github.com/tyomoto/potential-meme"
    },
    {
        title: 'Express Movies',
        image: ExpressMoviesPic,
        info: 'This project uses a created database for users to review and discuss movies currently in theatres (Canada).',
        repo: "https://github.com/WilliamL1998/crispy-octo-bassoon",
        deployed: "https://vast-shelf-82768.herokuapp.com/"
    },
    {
        title: 'Employee Tracker',
        image: EmployeeTrackerPic,
        info: "This project is a command line app that helps to manage a company's database of employees.",
        repo: "https://github.com/tyomoto/shiny-spork",
        deployed: "Run through local system",
    },
    {
        title: 'Team Profile Generator',
        image: TeamProfileGeneratorPic,
        info: "This project is a command link app that will generate an HTML page, which displays user-inputted data about their software engineering team.",
        repo: "https://github.com/tyomoto/cautious-goggles",
        deployed:"Run through local system",
    }
]

function Project(){
    return(
        <div>
            <ul className='projects'>
                <li className= 'project'>
                    <div className="project-text">
                        <span className="project-title"></span>
                        <span className="project-info"></span>
                        <a href="" className="project-link"></a>
                        <a href="" className="project-link"></a>
                    </div>
                </li>
            </ul>
        </div>
        
    )
}

export default Project