import React, {useEffect, useState} from 'react';
import '../css/App.css'
import '../css/BasicInfo.css'
import {Box, Slide, Typography} from "@mui/material";
import profile from '../images/profile.jpg'
import holiday from '../images/holiday.jpg'
import ball from '../images/ball.jpg'
import rowing from '../images/rowing.jpg'
import media from '../images/media.jpg'
import SlideShow from "./Slideshow";
const AboutMe = () => {
    const [photos] = useState([holiday, profile, ball, media, rowing]); // Replace these with your actual image URLs
    const [showAboutMe, setShowAboutMe] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowAboutMe(true);
        }, 2700);
    }, []);


    return (
        <Slide direction="left" in={showAboutMe} mountOnEnter unmountOnExit>
            <Box sx={{gap:4}}className="area vertical-center">
                    <SlideShow direction="left" photosList={photos}/>
                    <div className="horizontal-center about-me">
                        <Typography variant="h5" className="underline" sx={{color:"white", textAlign:"left", alignSelf:"start"}}>
                            {'About me:'}
                        </Typography>
                        <Typography variant="body2" sx={{color:"white", textAlign:"left"}}>
                            {'I am a dedicated and highly motivated third-year Software Engineering student at the University of Canterbury. My academic journey has equipped me with a robust foundation in software development, encompassing both front-end and back-end technologies, and proficiency in several programming languages.'}
                        </Typography>
                    </div>
            </Box>
        </Slide>
    );
};

export default AboutMe;