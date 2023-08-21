import React from 'react';
import '../css/App.css'
import Background from "./Background";
import Title from "./Title";
import BasicInfo from "./BasicInfo";
import NavigationBar from "./NavigationBar";


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
                <Title/>
                <BasicInfo/>
            </div>
        </div>
    );
}

export default HomePage;
