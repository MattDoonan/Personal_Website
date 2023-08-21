import React, {useState, useEffect} from 'react';
import '../css/App.css'
import '../css/Title.css'
import {Typography, Avatar, Box, Slide, Link} from "@mui/material";
import linkedIn from '../images/linkedIn.png'
import gitHub from '../images/gitHub.png'


const Title = () => {

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
            <Box className="area horizontal-center">
                <Slide direction="right" in={showName} mountOnEnter unmountOnExit>
                    <Typography variant="h2" sx={{color:"white", textAlign:"center"}}>
                        {'Matt '}
                        <strong className="orange">Doonan</strong>
                    </Typography>
                </Slide>
                <Slide direction="right" in={showSmallInfo} mountOnEnter unmountOnExit>
                    <Typography className="underline" variant="body1" sx={{color:"white", textAlign:"center"}}>
                        {'Third year Software Engineering Student'}
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
            </Box>
    );
}

export default Title;
