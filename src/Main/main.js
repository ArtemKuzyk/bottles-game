import React from 'react';
import {BotlleSecondVersion} from './bottle';
import './main.css'
import {Home} from './home'
import {Settings} from './Settings'
import {BrowserRouter, Route, Routes} from "react-router-dom";
/////////////////////////////////////////////////////////////

class Main extends React.Component{

    constructor(){
        super();
        // this.state = {
        //     isNavBarHidden: false
        // };
        this.changeState = this.changeState.bind(this);
        this.state = {
            'bottles' : 7,
            'colors' : 3,
            'sections' : 8,
            'sound' : "checked"
        }
    }
      
    changeState(value){
        // this.setState(prevState => ({isNavBarHidden: !prevState.isNavBarHidden}));
        console.log(value);
        this.setState({
            'bottles' : value.bottles,
            'colors' : value.colors,
            'sections' : value.sections,
            'sound' : value.sound
        });
    }

    render(){
        return(
            <BrowserRouter>
                {/* {(this.state.isNavBarHidden) ? null : <Home changeState = {this.changeState}/> } */}
                <Routes>
                    <Route exact path='/' element={< Home />}></Route>
                    {/* <Route exact path='settings' element={< Settings changeState = {this.changeState} />}></Route>
                    <Route exact path='bottle' element={< BotlleSecondVersion changeState = {this.changeState} />}></Route> */}
                    <Route exact path='settings' element={< Settings state = {this.state} changeState = {this.changeState} />}></Route>
                    <Route exact path='bottle' element={< BotlleSecondVersion state = {this.state} />}></Route>
                </Routes>
            </BrowserRouter>
        );
    }
    
}
  
export {Main};