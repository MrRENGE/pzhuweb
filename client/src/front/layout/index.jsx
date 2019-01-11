import React, { Component } from "react";
import { Avatar, Input } from "antd";

import "./index.scss";

const Search = Input.Search;
export default class Layout extends Component {
  render() {
    return (
      <div className="container">
        <div className="nav-bar">
          <div className="nav-bar-left">
            <a class="app-logo" href="/" target="_self">Web应用专业团队</a>
            <div className="nav-bar-menu">
              <div className="nav-bar-menu-item">菜单1</div>
              <div className="nav-bar-menu-item">菜单2</div>
            </div>
          </div>
          <div className="nav-bar-right">
            <Search
              className="nav-bar-right-search"
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            />
            <Avatar
              className="nav-bar-right-avator"
              size="large"
              style={{ backgroundColor: "#87d068" }}
              icon="user"
            />
          </div>
        </div>
        <div className="content">{this.props.children}</div>
        <div className="footer" />
      </div>
    );
  }
}
