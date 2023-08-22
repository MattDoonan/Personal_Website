import React, {useEffect, useState} from 'react';
import '../css/App.css';
import '../css/projects.css';
import Background from "./Background";
import NavigationBar from "./NavigationBar";
import {Box, CardMedia, Slide, Typography} from "@mui/material";
import SlideShow from "./Slideshow";
import teamOuting1 from "../images/teamOuting2.jpg";
import teamOuting2 from "../images/teamOuting3.jpg";
import teamOuting3 from "../images/teamOuting4.jpg";
import dailyStats from "../images/dailyStatsSat.png";
import recFriend from "../images/recFriendsSat.png";
import feeds from "../images/feedsSat.png";



const Projects = () => {

    const [photos] = useState([dailyStats, teamOuting1, teamOuting2, recFriend, teamOuting3, feeds]);

    const openNav = () => {
        const nav = document.getElementById("NavigationBar");
        const page = document.getElementById("pageContent");
        if (nav != null && page != null) {
            nav.style.width = "20rem";
            page.style.paddingLeft = "20rem";
        }
    }

    const navToWebsite = () => {
        window.location.href = 'https://csse-s302g7.canterbury.ac.nz/prod/';
    }

    const [showSaturday, setSaturday] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setSaturday(true);
        }, 700);
    }, []);

    return (
        <div>
            <Background/>
            <span  className="open-nav" onClick={openNav}>&#9776;</span>
            <NavigationBar/>
            <div className="page-content horizontal-center" id="pageContent">
                <Slide direction="right" in={showSaturday} mountOnEnter unmountOnExit>
                    <Box sx={{gap:4}}className="a-project vertical-center">
                        <CardMedia
                            component="iframe"
                            src="https://csse-s302g7.canterbury.ac.nz/prod/"
                            className="show-website"
                            scrolling="no"
                            onClick={navToWebsite}
                        />
                        <div className="horizontal-center project-info">
                            <div className={"project-title"}>
                                <Typography variant="h5" className="underline" sx={{color:"white", textAlign:"left", alignSelf:"start"}}>
                                    {'Saturday (In development):'}
                                </Typography>
                                <Typography variant="body2" sx={{color:"white", textAlign:"left"}}>
                                    {"Link: "}<a className="link-to-in link-underline" href="https://csse-s302g7.canterbury.ac.nz/prod/">https://csse-s302g7.canterbury.ac.nz/prod/</a>
                                </Typography>
                                <Typography variant="body2" sx={{color:"white", textAlign:"left"}}>
                                    <span className="orange">Contributors:</span> <a className="link-to-in" href="https://www.linkedin.com/in/hugh-avery-b11214206/">Hugh, </a> <a className="link-to-in" href="https://www.linkedin.com/in/josh-brown-001486144/">Josh, </a> <a className="link-to-in" href="https://www.linkedin.com/in/lex-ramirez-402443228/">Lex, </a> <a className="link-to-in" href="https://www.linkedin.com/in/matthew-doonan-b569a1278/">Matt, </a> <a className="link-to-in" href="https://www.linkedin.com/in/nutcha-sirawattanakul-664118239/">Nutcha, </a> <a className="link-to-in" href="https://www.linkedin.com/in/tara-lipscombe-b2737923a/">Tara, </a> <a className="link-to-in" href="https://www.linkedin.com/in/d-exclaimation/">Vincent </a>
                                </Typography>
                            </div>
                            <Typography variant="body2" sx={{color:"white", textAlign:"left"}}>
                                <strong className="orange">Objective: </strong> {" Designed and developed a team analytical buddy system to enhance personal and team productivity by enabling users to plan activities, track team performance, and easily share results with friends and colleagues."}
                            </Typography>
                            <Typography variant="body2" sx={{color:"white", textAlign:"left"}}>
                                <strong className="orange">Methodology: </strong> {" Employed agile development methodology, specifically Scrum, for project management. Collaborated closely with the Product Owner (PO) to gather requirements, define features, and prioritize tasks. Regularly engaged in story creation and acceptance criteria definition, ensuring alignment with user needs."}
                            </Typography>
                            <Typography variant="body2" sx={{color:"white", textAlign:"left"}}>
                                <strong className="orange">Key Responsibilities: </strong> {" Requirement Gathering: Led the team in regular discussions with the Product Owner to understand and refine project requirements. Project Planning: Facilitated sprint planning sessions, breaking down tasks into user stories with clear acceptance criteria. Development: Actively contributed to the development of a user-friendly application designed to work seamlessly across various devices. Communication: Maintained open and frequent communication within the team, fostering a collaborative environment crucial for project success."}
                            </Typography>
                            <Typography variant="body2" sx={{color:"white", textAlign:"left"}}>
                                <strong className="orange">Achievements: </strong> {" Successfully implemented a user-friendly application that functions smoothly on diverse devices, enhancing user accessibility. Improved team collaboration and efficiency through Scrum methodology adoption, ensuring timely delivery of features and improved project alignment with user expectations."}
                            </Typography>
                        </div>
                        <SlideShow direction="right" photosList={photos}/>
                    </Box>
                </Slide>
            </div>
        </div>
    );
}

export default Projects;
