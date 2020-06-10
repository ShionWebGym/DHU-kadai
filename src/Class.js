import React, { Component } from "react";
import './css/Class.css';

class Class extends Component{
    render(){
        return(
            <div className="Class" id="content" name="class">
            <h2 className="head2"npm install react-spring>WEBデザイン・WEB開発の授業紹介</h2>
            <ul className="container-box">
                <li className="class-box">
                    <h3 className="class-name">Webサイトプロトタイプ演習</h3>
                    <div className="class-image_1"></div>
                    <p className="class-para">サイトマップ、ワイヤーフレーム、プロトタイプの制作は、Webサイト制作において大変重要です。<br/>
実際に完成させたサイトを手戻りなくするため、Webサイト構築を行なう上で重要となる「設計フェーズ」の理解を深め、精度の高いワイヤーフレームやプロトタイプを出来るようにします。<br/>
また、プロトタイピングツールを利用した効率の良いプロトタイピング作成手法を理解し、スムーズなWebサイト制作ができる技術を学びます。</p>
                </li>
                <li className="class-box">
                    <h3 className="class-name">Webサイト制作実践演習</h3>
                    <div className="class-image_2"></div>
                    <p className="class-para">デザインカンプなどを元にコーディング計画を立て、Webサイトの文書構造をイメージし、それを形にするためのHTML、CSSマークアップを繰り返し行なうことで、実務レベルでのWebコーディング手法を理解していきます。
さらにアクセシビリティの考え方、レスポンシブWebデザイン、CSSフレームワーク、コーディング効率化を学び、高精度のWebコーディングスキルを習得していきます。</p>
                </li>
                <li className="class-box">
                    <h3 className="class-name">コンテンツデザインゼミ</h3>
                    <div className="class-image_3"></div>
                    <p className="class-para">デザインと技術とユーモアを複合的に考え、問題解決のためのアプローチ方法の探求、社会との関係を築くモノ創り、インターネットを活用して自分や自分たちの周りを少し豊かにする方法を考えるといった活動を行っていきます。
ゼミで様々な活動やコミュニケーションを行っていく中で、個別に自らが実現したい卒業制作のテーマを設定し、卒業制作を行っていきます。</p>
                </li>
            </ul>
            </div>
        );
    }
}

export default Class;