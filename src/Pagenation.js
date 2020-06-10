import React, { Component } from "react";
import './css/Pagenation.css';
// import React, { useEffect } from 'react';
// import { useInview } from 'react-intersection-observer';

class Pagenation extends Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }
    render(){
        return(
            <div ref={this.myRef}>
        <div className="pagenation-anime" id="1"></div>
        <div className="pagenation-anime" id="2"></div>
        <div className="pagenation-anime" id="3"></div>
        <div className="pagenation-anime" id="4"></div>
        <div className="pagenation-anime" id="5"></div>
            </div>
        );
    }
}
export default Pagenation;