import React, { Component } from "react";
import './css/Others.css';
class Others extends Component{
    render(){
        return(
            <div className="others" id="content">
            <h2 className="others-head">OTHER SUBJECTS</h2>
            <ul className="others-box">
                <li className="grid1">
                    <a href="https://www.dhw.ac.jp/faculty/3dcg/" className="grid-image_3dcg"><span className="grid-text">3DCG・VFX</span></a>
                </li>
                <li className="grid2">
                    <a href="https://www.dhw.ac.jp/faculty/game/" className="grid-image_game"><span className="grid-text">ゲームプログラミング</span></a>
                </li>
                <li className="grid3">
                    <a href="https://www.dhw.ac.jp/faculty/movie/" className="grid-image_mov"><span className="grid-text">映像・映画</span></a>
                </li>
                <li className="grid4">
                    <a href="https://www.dhw.ac.jp/faculty/graphic/" className="grid-image_gra"><span className="grid-text">グラフィックデザイン</span></a>
                </li>
                <li className="grid5">
                    <a href="https://www.dhw.ac.jp/faculty/anime/" className="grid-image_ani"><span className="grid-text">アニメ</span></a>
                </li>
                <li className="grid6">
                    <a href="https://www.dhw.ac.jp/faculty/web/" className="grid-image_web"><span className="grid-text">Webデザイン・Web開発</span></a>
                </li>
                <li className="grid7">
                    <a href="https://www.dhw.ac.jp/faculty/media/" className="grid-image_med"><span className="grid-text">VR/AR メディアアート</span></a>
                </li>
                <li className="grid8">
                    <a href="https://www.dhw.ac.jp/faculty/business/" className="grid-image_bus"><span className="grid-text">広告・起業</span></a>
                </li>
            </ul>
            <a href="#top" className="backbtn">サイトトップへ戻る</a>
            <p className="copy"><small>Copyright c 2018 Digital Hollywood Co.,Ltd. All Rights Reserved.</small></p>
            </div>
        );
    }
}

export default Others;