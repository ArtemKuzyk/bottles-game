import './Bottle.css';
import React from 'react';
import {Link} from "react-router-dom";
import { emptyColor, emptyColorRGB, colors, Bottles, sections } from "./game-settings"
///////////////////////////////////////////

let existingColors;

///////////////////////////////////////////
class Bottle extends React.Component{
  
  constructor(props) {
    super(props);
    this.id = props.id;
    this.styleValue = {"background" : `linear-gradient(180deg, ${emptyColor} 10%,  ${getColorSection(props.sections)}`};
    this.firstBottleStyle = {};
    // this.state = {"background" : `linear-gradient(180deg, ${emptyColor} 10%,  ${getColorSection()}`};
  }

  activateBottle(e){
    let activeBottles = document.querySelectorAll('.activeBottle');
    if(activeBottles.length === 0) {
      if(!checkEmptyValue(e.target.style.background)) {
        return;
      };
    }

    if(activeBottles.length === 1) {
      if(activeBottles[0].id === e.target.id){
        e.target.classList.toggle('activeBottle');
        return;
      }
      if(!checkEmptyValue(e.target.style.background, true)) {
        return;
      };
    }

    e.target.classList.toggle('activeBottle');
    
    if(activeBottles.length === 1){
      changeSecondBottle(e, activeBottles[0]);
      this.firstBottleStyle = changeFirstBottle(activeBottles[0]);
      this.firstBottle = activeBottles[0];
      e.target.classList.toggle('activeBottle');
      this.firstBottle.classList.toggle('activeBottle');
    }
    // this.setState({"background" : this.getBakgroundState()}, () => console.log(this.state));
  } 

  getBakgroundState(){
    return document.getElementById(`${this.id}`).style.background;
  }
  render() {
    return (<div className="bottle" 
                 key={this.id} 
                 id={this.id} 
                 style={this.styleValue} 
                //  style={this.state} 
                 onClick={(e) => this.activateBottle(e)}>
            </div>);
  }

}

function changeSecondBottle(secondBottle, firstBottle){

  let emptyColor = '(128, 255, 212)';
  let lg = secondBottle.target.style.background.replace('linear-gradient(', '');
  lg = lg.slice(0, -2);
  let colorArray = lg.split('%,');

  let lgf = firstBottle.style.background.replace('linear-gradient(', '');
  lgf = lgf.slice(0, -2);
  let colorArrayf = lgf.split('%,');
  let color;

  for (let i = 1; i < colorArrayf.length; i++) {
      if(colorArrayf[i].includes(emptyColor)){
        continue;
      }
    else{
      color = colorArrayf[i].slice(0, -2);
      if (colorArrayf[i] === colorArrayf[colorArrayf.length-1]){
        colorArrayf[i] = `${emptyColor} ${colorArrayf[i].slice(-2)}`;
      } else {
        colorArrayf[i] = `${emptyColor} ${colorArrayf[i].slice(-2)}`;
        colorArrayf[i+1] = `${emptyColor} ${colorArrayf[i+1].slice(-2)}`;
      }
      break;
    }
  }

  let newStyle = `linear-gradient(${colorArrayf.join('%,')}%)`;
  firstBottle.style.background = newStyle;

  for (let i = colorArray.length - 1; i > 0; i--) {
      if(!colorArray[i].includes(emptyColor)){
        continue;
      }
    else {
      if(i === colorArray.length - 1){
        colorArray[i] = `${color}${colorArray[i].slice(-2)}`;
      }
      else {
        colorArray[i] = `${color}${colorArray[i].slice(-2)}`;
        colorArray[i-1] = `${color}${colorArray[i-1].slice(-2)}`;
        i--;
      }
      break;
    }
  }
  newStyle = `linear-gradient(${colorArray.join('%,')}%)`;
  secondBottle.target.style.background = newStyle;
}

function changeFirstBottle(bottle){
  let lg = bottle.style.background.replace('linear-gradient(', '');
  lg = lg.slice(0, -2);
  let colorArray = lg.split('%,');
  for (let i = 1; i < colorArray.length; i++) {
      if(colorArray[i].includes(emptyColor) || colorArray[i].includes(emptyColorRGB)){
        continue;
      }
    else{
      if (colorArray[i] === colorArray[colorArray.length-1]){
        colorArray[i] = `${emptyColor} ${colorArray[i].slice(-2)}`;
      } else {
        colorArray[i] = `${emptyColor} ${colorArray[i].slice(-2)}`;
        colorArray[i+1] = `${emptyColor} ${colorArray[i+1].slice(-2)}`;
      }
      break;
    }
  }
  let newStyle = `linear-gradient(${colorArray.join('%,')}%)`;
  bottle.style.background = newStyle;
}

function checkEmptyValue(style, booleanVariable = false){
  let emptyColor = '(128, 255, 212)';
  let activate = false;
  let styleArray = style.split('rgb');
  if (booleanVariable === false) {
    for(let i = 1; i < styleArray.length; i++){
      if(!styleArray[i].includes(emptyColor)){
        activate = true;
        break;
      }
    }
    return activate;
  } else {
    return styleArray[2].includes(emptyColor)?true:false;
  }
}

function getColorSection(bottleSections){
  // let bottleSections = 10;
  bottleSections = +bottleSections;
  let gradientValue = '';
  for (let i = 1; i < sections[bottleSections].length; i++) {
    let color = getOneColor();
    if (color === undefined) color = emptyColor;
    if(i === sections[bottleSections].length - 1){
      gradientValue += ` ${color} ${sections[bottleSections][i]}%`
      console.log("123")
    } else {
      gradientValue += ` ${color} ${sections[bottleSections][i]}%, ${color} ${sections[bottleSections][i+1]}%,`
      i++;
    }
  }
  return gradientValue;
};

//Отримуємо кольори в масиві для подальшого розподілу по пляшкам

function getColors(bottleNumbers, colorNumbers, bottleSections){
  let existingColors = [];
  // let bottleSections = 3;
  let colorIterator = 0;
  for (let i = 0; i < bottleNumbers; i++) {
    if(+colorIterator === +colorNumbers) colorIterator = 0;
    console.log(colorIterator)
    for (let j = 0; j < +bottleSections; j++) {
      existingColors.push(colors[colorIterator]);
    }
    colorIterator++;
  }
  return existingColors;
}


function getOneColor(){
  let colorIndex = Math.floor(Math.random() * existingColors.length);
  let color = existingColors[colorIndex];
  existingColors.splice(colorIndex, 1);
  return color;
}

//add numberOfBottle Variable from levels and settings who were stored in local storage

const numberOfBottle = (bottleNumbers, bottleSections) => {
  let iterator = 0;
  console.log(iterator)
  // return Bottles.map(({id}) => {
  return Bottles.map((item) => {
    iterator++;
    if (item.id > (bottleNumbers + 1)) return false;
    return <Bottle id = {item.id} sections = {bottleSections}/>  //call class Bottle
  });
}

  


///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

function BotlleSecondVersion(props){
  existingColors = getColors(props.state.bottles, props.state.colors, props.state.sections);
  return(
    <div className="container">
      <Link to="../" >
        {/* <div className="home-image" onClick={() => props.changeState()}></div> */}
        <div className="home-image"></div>
      </Link>
      {numberOfBottle(props.state.bottles, props.state.sections)}
    </div>
  );
}

export {BotlleSecondVersion};
