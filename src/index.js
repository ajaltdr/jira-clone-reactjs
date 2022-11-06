import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.css";
import "./index.css";
import Board from "./app/Board";
import Layout from "./app/Layout";
import Setting from "./app/Setting";
import { Col, Row } from "antd";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Row>
      <Layout />
      <Col span={16}>
        <Routes>
          <Route exact path="/" element={<Board />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </Col>
    </Row>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
