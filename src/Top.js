import React, { Component } from "react";
import './css/index.css';

class Top extends Component{
    h1 = {
        fontSize:"4.5rem",
        color:"#ffffff",
        marginLeft:"40px",
        marginTop:"250px"
    }
    top = {
        height:"100vh"
    }
    render(){
        return(
            <div style={this.top}>
            <h1 style={this.h1}>
                Web業界をリードするための<br/>知識と技術を手に入れる
            </h1>
            <div className="topimage">
            <p className="text1">スマートフォンの普及、SNSの流行、ネットワークビジネスの拡大など、めざましい発展を続けるWeb業界。そこで求められる最先端の知識と技術を身につけられるのが、DHUの特長です。Webサイトの構築技法のみならず各種サービスの企画・運営についてまでを修得し業界の今、そしてこれからを活性化させる人材となることを目指します。</p>
            <a href="https://www.dhw.ac.jp/oc/" className="ocbtn">オープンキャンパスへ行く</a>
            </div>
            </div>
        );
    }
}

export default Top;