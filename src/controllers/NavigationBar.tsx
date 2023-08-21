import React, {useEffect, useState} from "react";
import {Avatar, Button, Card, Link, Typography} from "@mui/material";
import profile from "../images/profile.jpg";
import '../css/NavBar.css';
import '../css/App.css';
// @ts-ignore
import cv from '../download/MattDoonanCV.pdf';
import linkedIn from "../images/linkedIn.png";
import gitHub from "../images/gitHub.png";
import MySlide from "./Slideshow";

const NavigationBar = () => {

    const listOfSkills:string[] = ["Software Development", "Agile Methodologies", "Git Knowledge", "Java", "Python", "TypeScript / JavaScript", "SQL", "C (Programming Language)", "Automated Testing"];

    const downloadDocument = () => {
        const fileUrl = cv;
        const anchor = document.createElement('a');
        anchor.href = fileUrl;
        anchor.download = 'MattDoonanCV.pdf';
        anchor.style.display = 'none';
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    };

    const closeNav = () => {
        const nav = document.getElementById("NavigationBar");
        const page = document.getElementById("pageContent");
        if (nav != null && page != null) {
            nav.style.width = "0";
            page.style.paddingLeft = "0";
        }
    }

    return (
        <div className="NavigationBar" id="NavigationBar">
            <Link className="close-btn" underline="none" variant="body2" onClick={closeNav} sx={{fontSize: 15, textAlign:"center"}}>
                {'X'}
            </Link>
            <div className="horizontal-center nav-area">
                <div className="profile-wrapper">
                    <div className="outside-pic"></div>
                    <Avatar
                        src={profile}
                        alt="linkedIn"
                        className = "icon"
                        sx={{ width: 100, height: 100}}
                    />
                </div>
                <Typography variant="body1" sx={{color:"white", textAlign:"left"}}>
                    {"Matt Doonan"}
                </Typography>
                <Typography variant="body2" sx={{color:"#676a73", fontSize: 12, textAlign:"left"}}>
                    {"Software Engineering Student"}
                </Typography>
                <Typography variant="body2" sx={{color:"#676a73", fontSize: 12, textAlign:"left"}}>
                    {"University Of Canterbury"}
                </Typography>
            </div>
            <div className="horizontal-center nav-area">
                <Typography variant="body2" sx={{color:"#FFFFFF", fontSize: 12, marginBottom:2, textAlign:"left"}}>
                    {"Noticeable Skills"}
                </Typography>
                <div className="my-skills">
                    {listOfSkills.map((skill, index) => (
                        <Typography key={index} variant="body2" sx={{color:"#676a73", fontSize: 12, textAlign:"left"}}>
                            {"- " + skill}
                        </Typography>
                    ))}
                </div>
            </div>
            <div className="horizontal-center nav-area">
                <Typography variant="body2" sx={{color:"#FFFFFF", fontSize: 12, marginBottom:2, textAlign:"left"}}>
                    {"Contact"}
                </Typography>
                <div className="my-info">
                    <Typography variant="body2" sx={{color:"#FFFFFF", fontSize: 12, textAlign:"left"}}>
                        {"Email:"}
                    </Typography>
                    <Typography variant="body2" sx={{color:"#676a73", fontSize: 12, textAlign:"left"}}>
                        {"matt.j.doonan@gmail.com"}
                    </Typography>
                </div>
                <div className="my-info">
                    <Typography variant="body2" sx={{color:"#FFFFFF", fontSize: 12, textAlign:"left"}}>
                        {"Mobile:"}
                    </Typography>
                    <Typography variant="body2" sx={{color:"#676a73", fontSize: 12, textAlign:"left"}}>
                        {"0210458830"}
                    </Typography>
                </div>
            </div>
            <div className="horizontal-center link-nav">
                <div className="profileLink">
                    <Avatar
                        src={linkedIn}
                        alt="linkedIn"
                        sx={{ width: 22, height: 22}}
                    />
                    <Link className="link-underline" underline="none" variant="body2" href="https://www.linkedin.com/in/matthew-doonan-b569a1278/" sx={{color:"#676a73", fontSize: 12, textAlign:"center"}}>
                        {'LinkedIn account'}
                    </Link>
                </div>
                <div className="profileLink">
                    <Avatar
                        src={gitHub}
                        alt="linkedIn"
                        sx={{ width: 22, height: 22, marginRight:1, backgroundColor:'white'}}
                    />
                    <Link className="link-underline" underline="none" variant="body2" href="https://github.com/MattDoonan" sx={{color:"#676a73", fontSize: 12, textAlign:"center"}}>
                        {'GitHub account'}
                    </Link>
                </div>
            </div>
            <button onClick={downloadDocument} className="download-cv link-underline">Download CV</button>

        </div>
    );
}

export default NavigationBar;
