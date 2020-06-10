import './css/Pagenation.css';
import React, { Component } from 'react';
// import React, { useEffect } from 'react';
// import { useInview } from 'react-intersection-observer';
class Pagenation extends Component{
    render(){
        return(
            <div id="pagenation-list">
        <div className="pagenation-anime" id="content"></div>
        <div className="pagenation-anime" id="content"></div>
        <div className="pagenation-anime" id="content"></div>
        <div className="pagenation-anime" id="content"></div>
        <div className="pagenation-anime" id="content"></div>
            </div>
        );
    }
     }
export default Pagenation;