import React, { Component } from 'react';
import './css/Navi.css';

class Navi extends Component{

    render(){
        return(
        <nav>
            <ul className="ul">
                <li className="nav1"><a href="#class">主な授業</a></li>
                <li className="nav2"><a href="#teacher">先生たち</a></li>
                <li className="nav3"><a href="#route">進路について</a></li>
                <li className="nav4"><a href="#others">その他の分野</a></li>
            </ul>
        </nav>
        );
    }
}
export default Navi;