import React, { Component } from 'react';
import './css/Main.css';
import Top from './Top';
import Class from './Class';
import Teacher from './Teacher';
import Route from './Route';
import Others from './Others';

class Main extends Component{
    render(){
        return(
            <div>
                <Top/>
                <Class/>
                <Teacher/>
                <Route/>
                <Others/>
            </div>
        );
    }
}

export default Main;