import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import "./style.css";
import {
  SearchOutlined,
  SettingOutlined,
  InsertRowBelowOutlined,
} from "@ant-design/icons";

import Avater from "../../../assests/avt.png";
import { NavLink } from "react-router-dom";
import { getProjectDetails } from "../../../api/projectApi";
const SideMenu = () => {
  const [projectName, setProjectName] = useState(
    getProjectDetails().project_name
  );
  const [projectCat, setCat] = useState(getProjectDetails().project_category);
  useEffect(() => {
    getProjectDetails();
  }, [projectName, getProjectDetails().project_category]);
  return (
    <>
      <div className="sidemenu">
        <Row>
          <Col>
            <img src={Avater} width={"40px"} />
          </Col>
          <Col className="project-name">
            <div style={{ fontWeight: "600" }}>{projectName}</div>
            <div style={{ color: "darkslategray", fontSize: "12px" }}>
              {projectCat} Project
            </div>
          </Col>
        </Row>
        <div className="menu-list">
          <NavLink end to="/">
            <Row className="menu">
              <Col>
                <InsertRowBelowOutlined />
              </Col>
              <Col style={{ marginLeft: "10px" }}>Kanban Board</Col>
            </Row>
          </NavLink>
          <NavLink to="/setting">
            <Row className="menu">
              <Col>
                <SettingOutlined />
              </Col>
              <Col style={{ marginLeft: "10px" }}>Project settings</Col>
            </Row>
          </NavLink>
        </div>
        <hr
          style={{
            opacity: "0.5",
            width: "95%",
            marginLeft: "-6px",
            marginTop: "20px",
          }}
        />
      </div>
    </>
  );
};

export default SideMenu;
