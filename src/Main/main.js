import React from 'react';
import {BotlleSecondVersion} from '../bottle';
import './main.css'
import {Home} from './home'
import {Settings} from './Settings'
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import {HashRouter, Route, Link, withRouter, Router, Routes} from "react-router-dom";
/////////////////////////////////////////////////////////////

class Main extends React.Component{

    constructor(){
        super();
        this.state = {
            isNavBarHidden: false
        };
        this.changeState = this.changeState.bind(this);
    }

    
    // componentDidMount() {
    //     localStorage.setItem("isNavBarHidden", this.state.isNavBarHidden); //to changeState
    // }
    
    // componentDidUpdate() {
    //     const isNavBarHidden = !JSON.parse(localStorage.getItem("isNavBarHidden"));
    //     console.log(isNavBarHidden);
    //     this.setState({ isNavBarHidden });
    // }
      

    changeState(){
        this.setState(prevState => ({isNavBarHidden: !prevState.isNavBarHidden}));
        console.log(this.state.isNavBarHidden);
        localStorage.setItem("isNavBarHidden", this.state.isNavBarHidden);
    }

    render(){
        return(
            <BrowserRouter>
                {(this.state.isNavBarHidden) ? null : <Home changeState = {this.changeState}/> }
                {/* {(this.state.isNavBarHidden) ? null : <Home/> } */}
                {/* {(this.state.isNavBarHidden) ? null : <Settings changeState = {this.changeState}/> } */}
                {/* <div className="main" onClick={() => this.changeState()}> */}
                    {/* <Home /> */}
                    {/* <BotlleSecondVersion /> */}
                    {/* <Settings /> */}
                {/* </div> */}
                <Routes>
                    <Route exact path='/' element={< Home />}></Route>
                    <Route exact path='main' element={< Main />}></Route>
                    <Route exact path='settings' element={< Settings changeState = {this.changeState}/>}></Route>
                    <Route exact path='bottle' element={< BotlleSecondVersion />}></Route>
                </Routes>
            </BrowserRouter>
            );
    }
    
}
  
export {Main};