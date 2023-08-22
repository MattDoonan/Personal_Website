import React from 'react';
import '../css/App.css'
import Background from "./Background";
import AboutMe from "./AboutMe";
import ImageTitle from "./ImageTitle";
import NavigationBar from "./NavigationBar";
import MyInterests from "./MyInterests"

const HomePage = () => {

    const openNav = () => {
        const nav = document.getElementById("NavigationBar");
        const page = document.getElementById("pageContent");
        if (nav != null && page != null) {
            nav.style.width = "20rem";
            page.style.paddingLeft = "20rem";
        }
    }

    return (
        <div>
            <Background/>
            <span  className="open-nav" onClick={openNav}>&#9776;</span>
            <NavigationBar/>
            <div className="page-content horizontal-center" id="pageContent">
                <ImageTitle/>
                <div className="info-content">
                    <div className="facts horizontal-center">
                        <AboutMe/>
                        <MyInterests/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
