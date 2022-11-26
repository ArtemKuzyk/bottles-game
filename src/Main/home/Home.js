import './home.css'
import React from 'react';
import {BrowserRouter, Route, Link, withRouter, Router, Routes} from "react-router-dom";
// import {BotlleSecondVersion} from '../../bottle';
// import {Settings} from '../Settings';
///////////////////////////////////////////

class Home extends React.Component{

    componentDidMount(){
        changeOuterContainerStyle();
        changeSectionNameStyle();
    }

    render(){
        return(
            <>
                <section className="section-menu">
                    <div className="outerContainer">
                        <Link to="bottle" className="innerContainer" onClick={() => this.props.changeState()}>
                            <h3>Start</h3>
                        </Link>
                    </div>
                    <div className="outerContainer">
                        <Link to="settings" className="innerContainer" onClick={() => this.props.changeState()}>
                            <h3>Settings</h3>
                        </Link>
                    </div>
                    <div className="outerContainer">
                        <Link to="/" className="innerContainer" onClick={() => this.props.changeState()}>
                            <h3>Quit</h3>
                        </Link>
                    </div>
                    <div className="outerContainer">
                        <Link to="/About-me" className="innerContainer" onClick={() => this.props.changeState()}>
                            <h3>About me</h3>
                        </Link>
                    </div>
                </section>
            </>
        );
    }
}

let centerPoint = [window.innerHeight/2, window.innerWidth/2];
let catetWidth = Math.floor(Math.sqrt(centerPoint[0]**2 + centerPoint[1]**2));

let rotate = Math.atan(window.innerHeight/window.innerWidth) * (180/Math.PI);
let rotateFirstElement = rotate - 90;
let skewYFirstElement = Math.abs(rotateFirstElement) - (90 - Math.abs(rotateFirstElement));

let rotateSecondElement = -Math.atan((window.innerHeight/2)/(window.innerWidth/2)) * (180/Math.PI);

const transformOriginValue = ['left top', 'right top', 'right bottom', 'left bottom'];
const sectoinColors = ['green', 'blue', 'red', 'yellow'];

function changeOuterContainerStyle(){
    const el = document.querySelectorAll('.section-menu > *');
    // console.log(el);
    for (let i = 0; i < el.length; i++) {
        el[i].style.width = catetWidth + 'px';
        el[i].style.height = catetWidth + 'px';
        el[i].style.transformOrigin = transformOriginValue[i];
        el[i].style.backgroundColor = sectoinColors[i];
        if (!(i%2)) {
            el[i].style.transform = `rotate(${rotateFirstElement}deg) skewY(${skewYFirstElement}deg)`;
        } else {
            el[i].style.transform = `rotate(${rotateSecondElement}deg) skewX(${skewYFirstElement}deg)`;
        }
        el[i].addEventListener('mouseenter', () => {
            el[i].style.borderColor = '#0000';
            el[i].style.boxShadow = `0px 0px 100px 150px ${sectoinColors[i]}`;
            el[i].style.zIndex = '1';
        });
        el[i].addEventListener('mouseleave', () => {
            el[i].style.borderColor = '#000';
            el[i].style.boxShadow = ``;
            el[i].style.zIndex = '0';
        });
    }
    
    el[1].style.top = '0';
    el[1].style.right = '0';

    el[2].style.right = '0';
    el[2].style.bottom = '0';

    el[3].style.left = '0';
    el[3].style.bottom = '0';
}

function changeSectionNameStyle(){
    const sectionName = document.querySelectorAll('h3');
    sectionName[0].style.bottom = '10%';
    sectionName[0].style.left = '10%';

    sectionName[1].style.top = '10%';
    sectionName[1].style.left = '10%';

    sectionName[2].style.right = '10%';
    sectionName[2].style.top = '10%';

    sectionName[3].style.right = '10%';
    sectionName[3].style.bottom = '10%';
}

export {Home};