import React, {useEffect, useState} from 'react';
import '../css/App.css'
import '../css/BasicInfo.css'
import {Box, Slide, Typography} from "@mui/material";
import profile from '../images/profile.jpg'
import holiday from '../images/holiday.jpg'
import ball from '../images/ball.jpg'
import MySlide from "./Slideshow";

const BasicInfo = () => {
    const photos = [holiday, profile, ball]; // Replace these with your actual image URLs
    const [albumIndex, setAlbumIndex] = useState(1);
    const [imageStack, setImageStack] = useState<string[]>([photos[1]]);
    const [imageStackDeg, setImageStackDeg] = useState<number[]>([Math.round(Math.random() * (6 - (-6)) - 6)]);
    const [imageStackIteration, setImageStackIteration] = useState<number[]>([0]);
    const [imageStackIterationPoint, setImageStackIterationPoint] = useState<number>(0);
    const [showAboutMe, setShowAboutMe] = useState(false);

    const updateAlbum = () => {
        const newIndex = (albumIndex + 1) % photos.length;
        setAlbumIndex(newIndex);
        const newDeg = Math.round(Math.random() * (6 - (-6)) - 6);
        let point = imageStackIterationPoint;
        point += 1;
        setImageStackIterationPoint(point);
        if (imageStack.length === 0) {
            setImageStack([photos[newIndex]]);
            setImageStackDeg([newDeg]);
            setImageStackIteration([point])
        } else if (imageStack.length < photos.length) {
            setImageStack([...imageStack, photos[newIndex]]);
            setImageStackDeg([...imageStackDeg, newDeg]);
            setImageStackIteration([...imageStackIteration, point]);
        } else {
            setImageStack([...imageStack.slice(1), photos[newIndex]]);
            setImageStackDeg([...imageStackDeg.slice(1), newDeg]);
            setImageStackIteration([...imageStackIteration.slice(1), point]);
        }
    };

    useEffect(() => {
        setTimeout(updateAlbum, 5000);
    }, [albumIndex, imageStack]);
    useEffect(() => {
        setTimeout(() => {
            setShowAboutMe(true);
        }, 2700);
    }, []);


    return (
        <Slide direction="left" in={showAboutMe} mountOnEnter unmountOnExit>
            <Box sx={{gap:4}}className="area vertical-center">
                    <div id="slideShow" className="slideshow">
                        {imageStack.map((image, index) => (
                            <MySlide
                                key={imageStackIteration[index]}
                                direction="right"
                                in={true}
                                photo={image}
                                index={imageStackDeg[index]}
                            />
                        ))}
                    </div>
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

export default BasicInfo;