import React, { Component } from "react";
import './css/Route.css';
import wada from './images/wada_main.jpg';
class Route extends Component{
    render(){
        return(
            <div className="route" id="content">
            <h2 className="route-head">WEBデザイン・WEB開発の卒業生</h2>
            <img src={wada} alt="和田さん" className="wada-image"></img>
            <h3 className="route-name">和田 泰弘さん &lang;株式会社サイバーエージェント&rang;</h3>
            <p className="route-para">自分で事業をつくりたいという想いからDHUに入学。Webをイチから学び、在学中から、フリーのWebデザイナーになり、作ったサイトの数は100を越えました。サイバーエージェントへの就職も決まりました。就職先にも応援してもらいながら、撮影機材のシェアリングサービスを在学中に起業することもできました。</p>
            <a href="https://www.dhw.ac.jp/employment/alumni/" className="roubtn">さらに卒業生を知る</a>
            </div>
        );
    }
}

export default Route;