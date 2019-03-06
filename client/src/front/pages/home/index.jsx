import React, { Component } from "react";
import {Carousel, Button } from 'antd';

import "./index.scss";
import img1 from "./banner1.jpg";
import img2 from "./banner2.jpg";
import { from } from "rxjs";

export default class Home extends Component {
  state = {
    bannerInfo: [
      {
        img: img2,
        description: "这是一段描述"
      },
      {
        img: img1,
        description: "这是一段描述2"
      }
    ],
    siledeImg:{
      backgroundImage:`{url(${img1})}`,
      backgroundSize:`cover`
    }
  };

  render() {
    const { bannerInfo } = this.state;
    return (
      <div className="home-container">
        <div className="slide">
              <div className="slide-one">
                <div className ='slide-image'>
                  <Carousel autoplay ref='slideOne'>
                    {bannerInfo.map((value,key)=>{
                      let SildeBackground ={backgroundImage:`url(${img1})`}
                    return (<div key={key} style ={SildeBackground}></div>)
                    })}
                    <div style ={this.state.siledeImg}><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                  </Carousel> 
                </div>
              <div style ={this.state.siledeImg} className='silde-description'>
                    <p>这是个很牛逼的团队<Button type='primary'>加入我们</Button></p>
              </div>
          </div>

          <div className="slide-one">
            <div style ={this.state.siledeImg} className='silde-description'></div>
            <div className ='slide-image'>
              <Carousel autoplay ref='slideOne'>
                {bannerInfo.map((value,key)=>{
                  let SildeBackground ={backgroundImage:`url(${value.img})`}
                return (<div key={key} style ={SildeBackground}></div>)
                })}
                <div style ={this.state.siledeImg}><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
              </Carousel> 
            </div>
             
          </div>
          
        </div>
      </div>
    );
  }
}
