import React, {useEffect, useState} from 'react';
import '../css/App.css'
import '../css/ImageTitle.css'
import {Avatar, CardMedia, Link, Slide, Typography} from "@mui/material";
import col from "../images/col.jpg"
import linkedIn from "../images/linkedIn.png";
import gitHub from "../images/gitHub.png";

const ImageTitle = () => {

    const [showName, setShowName] = useState(false);
    const [showSmallInfo, setShowSmallInfo] = useState(false);
    const [showLinkedIn, setShowLinkedIn] = useState(false);
    const [showGitHub, setShowGitHub] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setShowName(true);
        }, 700);
        setTimeout(() => {
            setShowSmallInfo(true);
        }, 1200);
        setTimeout(() => {
            setShowLinkedIn(true);
        }, 1700);
        setTimeout(() => {
            setShowGitHub(true);
        }, 2200);
    }, []);

    return (
        <div className="Image-Title-Card">
            <CardMedia
                component="img"
                image={col}
                alt="flag"
                className="title-Image"
            />
            <div className="title-content">
                <Slide direction="right" in={showName} mountOnEnter unmountOnExit>
                    <Typography variant="h2" sx={{color:"white"}}>
                        {'Matt '}
                        <strong className="orange">Doonan</strong>
                    </Typography>
                </Slide>
                <Slide direction="right" in={showSmallInfo} mountOnEnter unmountOnExit>
                    <Typography className="underline" variant="body1" sx={{color:"white", textAlign:"center"}}>
                        {<strong>Third year Software Engineering Student</strong>}
                    </Typography>
                </Slide>
                <div className="links">
                    <Slide direction="right" in={showLinkedIn} mountOnEnter unmountOnExit>
                        <div className="profileLink">
                            <Avatar
                                src={linkedIn}
                                alt="linkedIn"
                                sx={{ width: 30, height: 30}}
                            />
                            <Link className="link-underline" underline="none" variant="body2" href="https://www.linkedin.com/in/matthew-doonan-b569a1278/" sx={{color:"white", textAlign:"center"}}>
                                {'LinkedIn account'}
                            </Link>
                        </div>
                    </Slide>
                    <Slide direction="right" in={showGitHub} mountOnEnter unmountOnExit>
                        <div className="profileLink">
                            <Avatar
                                src={gitHub}
                                alt="linkedIn"
                                sx={{ width: 30, height: 30, marginRight:1, backgroundColor:'white'}}
                            />
                            <Link className="link-underline" underline="none" variant="body2" href="https://github.com/MattDoonan" sx={{color:"white", textAlign:"center"}}>
                                {'GitHub account'}
                            </Link>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default ImageTitle;