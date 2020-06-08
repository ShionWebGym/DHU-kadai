import React, { Component } from 'react';
import './css/Navi.css';

class Navi extends Component{

    render(){
        return(
        <nav>
            <ul className="ul">
                <li className="nav1"><a href="https://www.dhw.ac.jp/">主な授業</a></li>
                <li className="nav2"><a href="https://www.dhw.ac.jp/">先生たち</a></li>
                <li className="nav3"><a href="https://www.dhw.ac.jp/">進路について</a></li>
                <li className="nav4"><a href="https://www.dhw.ac.jp/">その他の分野</a></li>
            </ul>
        </nav>
        );
    }
}
export default Navi;