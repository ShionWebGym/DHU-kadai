import React, { Component } from "react";
import './css/Others.css';
class Others extends Component{
    render(){
        return(
            <div className="others">
            <h2>OTHER SUBJECTS</h2>
            <ul>
                <li>
                    <a href="https://www.dhw.ac.jp/faculty/3dcg/">3DCG・VFX</a>
                </li>
                <li>
                    <a href="https://www.dhw.ac.jp/faculty/game/">ゲームプログラミング</a>
                </li>
                <li>
                    <a href="https://www.dhw.ac.jp/faculty/movie/">映像・映画</a>
                </li>
                <li>
                    <a href="https://www.dhw.ac.jp/faculty/graphic/">グラフィックデザイン</a>
                </li>
                <li>
                    <a href="https://www.dhw.ac.jp/faculty/anime/">アニメ</a>
                </li>
                <li>
                    <a href="https://www.dhw.ac.jp/faculty/media/">VR/AR メディアアート</a>
                </li>
                <li>
                    <a href="https://www.dhw.ac.jp/faculty/business/">広告・起業</a>
                </li>
            </ul>
            <a href="#top">サイトトップへ戻る</a>
            </div>
        );
    }
}

export default Others;