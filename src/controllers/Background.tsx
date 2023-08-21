import React, {useEffect} from 'react';
import '../css/Background.css'


const Background = () => {
    useEffect(() => {
        const circleList = document.getElementById('circleList');
        if (circleList !== null) {
            const circleItems = circleList.querySelectorAll('li');
            circleItems.forEach((item) => {
                const randomFactorStart = Math.random();
                const randomNumberStart = 1 + Math.floor(randomFactorStart * (100 - 1 + 1));
                item.style.setProperty('--randomYStart', `calc(1vh * ${randomNumberStart})`);
                const randomFactorEnd = Math.random();
                const randomNumberEnd = 1 + Math.floor(randomFactorEnd * (100 - 1 + 1));
                item.style.setProperty('--randomYEnd', `calc(1vh * ${randomNumberEnd})`);
            });
        }
    }, []);

    return (
        <div className="background">
            <ul className="circles" id="circleList">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
}

export default Background;
