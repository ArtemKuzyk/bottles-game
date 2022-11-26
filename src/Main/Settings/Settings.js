import './settings.css'
import React from 'react';
// import {BrowserRouter, Route, Link, withRouter, Router, Routes} from "react-router-dom";
import {BotlleSecondVersion} from '../../bottle';
// import Settings from '../Settings';
///////////////////////////////////////////

class Settings extends React.Component{
    render(){
        return(
          <>
              <section className="section-settings">
                <form action="">
                    <h2>Settings</h2>
                    <div>
                        <label for="bottles">Bottles</label>
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
                        <label for="colors">Colors</label>
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
                        <label for="sections">Sections</label>
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
                        <label for="sound">Sound</label>
                        <input type="checkbox" name="sound" defaultChecked="checked" id=""/>
                    </div>
                    <button type="submit">Apply</button>
                </form>
              </section>
          </>  
        );
    }
}


export {Settings};