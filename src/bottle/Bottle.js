import './Bottle.css';
import React from 'react';
///////////////////////////////////////////

const emptyColor = '#80ffd4';
const emptyColorRGB = 'rgb(128, 255, 212)';
const colors = [
  '#00ff26', 
  '#ff0000', 
  '#ffa500', 
  '#00d4ff',
  '#ffff00',
  '#0000ff',
  '#f007a7',
  '#006c36',
  '#867575',
  '#7227ac'
];

const Bottles = [
  {id:'1', value:1},
  {id:'2', value:2},
  {id:'3', value:3},
  {id:'4', value:4},
  {id:'5', value:5},
  {id:'6', value:6},
  {id:'7', value:7},
  {id:'8', value:8},
  {id:'9', value:9},
  {id:'10', value:10}
]

const sections = {
  3:[10, 11, 40, 41, 70, 71],
  4:[10, 31.5, 32.5, 54, 55, 76.5, 77,5],
  5:[10, 27, 28, 45, 46, 63, 64, 81, 82],
  6:[10, 24, 25, 39, 40, 54, 55, 69, 70, 84, 85],
  7:[10, 21.85, 22.85, 34.7, 35.7, 47.55, 48.55, 60.4, 61.4, 73.25, 74.25, 86.1, 87.1],
  8:[10, 20.25, 21.25, 31.5, 32.5, 42.75, 43.75, 54, 55, 65.25, 66.25, 76.5, 77.5, 87.75, 88.72],
  9:[10, 19, 20, 29, 30, 39, 40, 49, 50, 59, 60, 69, 70, 79, 80, 89, 90],
  10:[10, 18, 19, 27, 28, 36, 37, 45, 46, 54, 55, 63, 64, 72, 73, 81, 82, 90, 91]
}

let existingColors;
let coloredBottle = 5;
const minColors = 3;

///////////////////////////////////////////
class Bottle extends React.Component{
  
  constructor(id) {
    super(id);
    this.id = id.id;
    this.styleValue = {"background" : `linear-gradient(180deg, ${emptyColor} 10%,  ${getColorSection()}`};
    this.firstBottleStyle = {};
    // this.state = {"background" : `linear-gradient(180deg, ${emptyColor} 10%,  ${getColorSection()}`};
    // this.state = {
    //   isNavBarHidden: false
    //   }
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

function getColorSection(){
  let bottleSections = 3;
  let gradientValue = '';
  for (let i = 1; i < sections[bottleSections].length; i++) {
    let color = getOneColor();
    if (color === undefined) color = emptyColor;
    if(i === sections[bottleSections].length - 1){
      gradientValue += ` ${color} ${sections[bottleSections][i]}%`
    } else {
      gradientValue += ` ${color} ${sections[bottleSections][i]}%, ${color} ${sections[bottleSections][i+1]}%,`
      i++;
    }
  }
  return gradientValue;
};

//Отримуємо кольори в масиві для подальшого розподілу по пляшкам
function getColors(){
  let existingColors = [];
  let bottleSections = 3;
  let colorIterator = 0;
  for (let i = 0; i < coloredBottle; i++) {
    if(colorIterator === minColors) colorIterator = 0;
    for (let j = 0; j < bottleSections; j++) {
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
let bottleNumbers = 5;
let iterator = 0;
const numberOfBottle = Bottles.map(({id}) => {
  if (iterator === bottleNumbers + 1) return false;
  iterator++;
  return <Bottle id={id} />  //call class Bottle
});


///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

function createBottlesContainer(){
  existingColors = getColors();
  return(
    <div className="container">
      {numberOfBottle}
    </div>
  );
}

export const BotlleSecondVersion = () => createBottlesContainer();