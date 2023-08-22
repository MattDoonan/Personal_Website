import React, {useEffect, useState} from 'react';
import '../css/App.css'
import '../css/BasicInfo.css'
import {Box, Slide, Typography} from "@mui/material";
import apocalypseNow from '../images/apocalypseNow.jpg'
import esb from '../images/esb.jpg'
import finance from '../images/finance.jpg'
import greenMile from '../images/greenMile.jpg'
import gym from '../images/gym.jpg'
import shawshank from '../images/shawshank.jpg'

import SlideShow from "./Slideshow";
const MyInterests = () => {
    const [photos] = useState([apocalypseNow, finance, esb, greenMile, gym, shawshank]); // Replace these with your actual image URLs
    const [showAboutMe, setShowAboutMe] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowAboutMe(true);
        }, 3200);
    }, []);


    return (
        <Slide direction="right" in={showAboutMe} mountOnEnter unmountOnExit>
            <Box sx={{gap:4}}className="area vertical-center">
                <div className="horizontal-center about-me">
                    <Typography variant="h5" className="underline" sx={{color:"white", textAlign:"left", alignSelf:"start"}}>
                        {'My Interests:'}
                    </Typography>
                    <Typography variant="body2" sx={{color:"white", textAlign:"left"}}>
                        <strong className="orange">Fitness Enthusiast:</strong> {" I love hitting the gym six days a week to stay active and healthy. It's a big part of my daily routine, and I find it an excellent way to maintain discipline and stay goal-oriented."}
                    </Typography>
                    <Typography variant="body2" sx={{color:"white", textAlign:"left"}}>
                        <strong className="orange">Money and Markets:</strong> {" Finance, economics, and the stock market fascinate me. I enjoy learning about how money works and how the economy functions."}
                    </Typography>
                    <Typography variant="body2" sx={{color:"white", textAlign:"left"}}>
                        <strong className="orange">Movie Buff:</strong> {" I'm a big fan of movies. I enjoy watching them in my free time and appreciate the stories they tell."}
                    </Typography>
                    <Typography variant="body2" sx={{color:"white", textAlign:"left"}}>
                        <strong className="orange">History Buff:</strong> {" History is a subject that's always intrigued me. I love learning about the past and events that occurred throughout history that shaped our world."}
                    </Typography>
                </div>
                <SlideShow direction="right" photosList={photos}/>
            </Box>
        </Slide>
    );
};

export default MyInterests;