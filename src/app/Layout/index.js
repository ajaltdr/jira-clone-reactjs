import React from "react";
import { Col, Row } from "antd";
import NavbarLeft from "./NavBarLeft";
import SideMenu from "./SideMenu";

import "./style.css";

const Layout = () => {
  return (
    <div className="App">
      <Row span={8}>
        <Col>
          {" "}
          <NavbarLeft />
        </Col>
        <Col>
          <SideMenu />
        </Col>
      </Row>
    </div>
  );
};

export default Layout;
