import React, { Component } from "react";
import './css/Teacher.css';
import komatsu from './images/teacher_komatsu_large.jpg';
import kuriya from './images/teacher_kuriya_large.jpg';
import yuki from './images/teacher_yuki_nakamura_large.jpg';

class Teacher extends Component{
    render(){
        return(
            <div className="teacher-section" id="content">
            <h2 className="teacher-section-head">WEBデザイン・WEB開発の担当教員</h2>
            <ul className="teacher-box">
                <li>
                    <img src={kuriya} className="teacher" alt="栗谷先生"/>
                    <h3 className="teacher-name">栗谷 幸助｜准教授</h3>
                    <p>Webデザイン業界への夢先案内人</p>
                </li>
                <li>
                    <img src={komatsu} className="teacher" alt="小松先生"/>
                    <h3 className="teacher-name">小松 学史｜准教授</h3>
                    <p>WebサイトフロントエンドエンジニアAdobe Flash認定インストラクター</p>
                </li>
                <li>
                    <img src={yuki} className="teacher" alt="中村先生"/>
                    <h3 className="teacher-name">中村 勇希｜非常勤講師</h3>
                    <p>「技術であそぶ」がコンセプト。デザイナー出身のフロントエンドエンジニア</p>
                </li>
            </ul>
            <a href="https://www.dhw.ac.jp/feature/teacher/" className="teabtn">さらに教員を知る</a>
            </div>
        );
    }
}

export default Teacher;