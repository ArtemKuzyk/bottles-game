import './settings.css'
import React from 'react';
import {Link} from "react-router-dom";
import {Home} from '../home'
///////////////////////////////////////////

class Settings extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            'bottles' : props.state.bottles,
            'colors' : props.state.colors,
            'sections' : props.state.sections,
            'sound' : props.state.sound
        }
    }

    consoleLog(){
        console.log(this.props)
    }

    changeState(){
        // this.setState(
        //     {bottles: document.querySelector('#bottles').value,
        //     colors: document.querySelector('#colors').value,
        //     sections: document.querySelector('#sections').value,
        //     sound: document.querySelector('#sound').checked}
        // );
        // console.log("11");
    }

    getSettingsObj(){
        return {
            bottles: document.querySelector('#bottles').value,
            colors: document.querySelector('#colors').value,
            sections: document.querySelector('#sections').value,
            sound: document.querySelector('#sound').checked 
        }
    }

    render(){
        return(
          <>    
                {this.consoleLog()}
              <section className="section-settings">
                <form action="">
                    <h2>Settings</h2>
                    <div>
                        <label htmlFor ="bottles">Bottles</label>
                        <div>
                            <input type="range" name="bottles" defaultValue={this.state.bottles} id="bottles" min="3" max="10" list="list"/><br/>
                            <datalist id="list">
                                <option value="3" label="3"></option>
                                <option value="4" label="4"></option>
                                <option value="5" label="5"></option>
                                <option value="6" label="6"></option>
                                <option value="7" label="7"></option>
                                <option value="8" label="8"></option>
                                <option value="9" label="9"></option>
                                <option value="10" label="10"></option>
                            </datalist>
                        </div>
                    </div>
                    <div>
                        <label htmlFor ="colors">Colors</label>
                        <div>
                            <input type="range" name="colors" defaultValue={this.state.colors} id="colors" min="3" max="10" list="list"/><br/>
                            <datalist id="list">
                                <option value="3" label="3"></option>
                                <option value="4" label="4"></option>
                                <option value="5" label="5"></option>
                                <option value="6" label="6"></option>
                                <option value="7" label="7"></option>
                                <option value="8" label="8"></option>
                                <option value="9" label="9"></option>
                                <option value="10" label="10"></option>
                            </datalist>
                        </div>
                    </div>
                    <div>
                        <label htmlFor ="sections">Sections</label>
                        <div>
                            <input type="range" name="sections" defaultValue={this.state.sections} id="sections" min="3" max="10" list="list"/><br/>
                            <datalist id="list">
                                <option value="3" label="3"></option>
                                <option value="4" label="4"></option>
                                <option value="5" label="5"></option>
                                <option value="6" label="6"></option>
                                <option value="7" label="7"></option>
                                <option value="8" label="8"></option>
                                <option value="9" label="9"></option>
                                <option value="10" label="10"></option>
                            </datalist>
                        </div>
                    </div>
                    <div>
                        <label htmlFor ="sound">Sound</label>
                        <input type="checkbox" name="sound" defaultChecked={this.state.sound} id="sound"/>
                    </div>
                    <Link to="../" >
                        <button type="submit" 
                                onClick={() => {
                                    // setSettings();
                                                this.props.changeState(this.getSettingsObj());
                                                // this.changeState();
                                                // console.log(this.props.state);
                                            }
                                        }
                        >
                        Apply
                        </button>
                    </Link>
                </form>
              </section>
          </>  
        );
    }
}

// function setSettings() {
//     localStorage.setItem('bottles', document.querySelector('#bottles').value);
//     localStorage.setItem('colors', document.querySelector('#colors').value);
//     localStorage.setItem('sections', document.querySelector('#sections').value);
//     localStorage.setItem('sound', document.querySelector('#sound').checked);
// }

export {Settings};