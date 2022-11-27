import './settings.css'
import React from 'react';
import {Link,} from "react-router-dom";
// import {BotlleSecondVersion} from '../../bottle';
// import { Home } from '../home';
// import { Link } from 'react-router-dom';
// import Settings from '../Settings';
///////////////////////////////////////////

class Settings extends React.Component{

    // constructor(){
    //     super();
    //     this.state = {
    //         isSettingsHidden: false
    //     };
    // }



    render(){
        return(
          <>
              <section className="section-settings">
                <form action="">
                    <h2>Settings</h2>
                    <div>
                        <label htmlFor ="bottles">Bottles</label>
                        <div>
                            <input type="range" name="bottles" defaultValue="3" id="bottles" min="3" max="10" list="list"/><br/>
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
                            <input type="range" name="colors" defaultValue="3" id="" min="3" max="10" list="list"/><br/>
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
                            <input type="range" name="sections" defaultValue="3" id="" min="3" max="10" list="list"/><br/>
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
                        <input type="checkbox" name="sound" defaultChecked="checked" id=""/>
                    </div>
                    <Link to="main" >
                        <button type="submit" onClick={() => this.props.changeState()}>Apply</button>
                    </Link>
                </form>
              </section>
          </>  
        );
    }
}


export {Settings};