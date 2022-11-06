import {
  SearchOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Row, Col, Modal } from "antd";
import React, { useState } from "react";
import "./style.css";
import Logo from "../../../assests/jira-logo.png";
import CreateIssue from "../../CreateIssue";

const NavbarLeft = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const showCreateModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <nav>
        <div
          className="left-nav"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <div className="left-nav-icons">
            <div className="left-nav-logo">
              <img src={Logo} />
            </div>

            <Row className="left-nav-menu">
              <Col>
                {" "}
                <SearchOutlined style={{ color: "white", fontSize: "24px" }} />
              </Col>
              {isHovered ? (
                <Col className="menu-text">SEARCH ISSUES</Col>
              ) : (
                <></>
              )}
            </Row>
            <Row className="left-nav-menu">
              <Col>
                {" "}
                <PlusOutlined style={{ color: "white", fontSize: "24px" }} />
              </Col>
              {isHovered ? (
                <Col className="menu-text" onClick={showCreateModal}>
                  CREATE ISSUES
                </Col>
              ) : (
                <></>
              )}
            </Row>
            <Row className="left-nav-menu">
              <Col>
                {" "}
                <QuestionCircleOutlined
                  style={{ color: "white", fontSize: "24px" }}
                />
              </Col>
              {isHovered ? <Col className="menu-text">HELP</Col> : <></>}
            </Row>
          </div>
        </div>
      </nav>

      <CreateIssue showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default NavbarLeft;
