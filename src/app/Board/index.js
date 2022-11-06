import React, { useEffect, useState } from "react";
import "./style.css";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import DragDrop from "../DragDrop";
import { getItems } from "../../api";
import { getProjectDetails } from "../../api/projectApi";

const Board = () => {
  const [projectName, setProjectName] = useState(
    getProjectDetails().project_name
  );
  useEffect(() => {
    getItems();
  }, [projectName]);
  return (
    <>
      <div className="board-container">
        <div className="breadcump">Projects / {projectName} / Kanban Board</div>
        <h2 className="title">Kanban Board</h2>
        <div className="search-filter">
          <Input prefix={<SearchOutlined />} className="search-box" />
        </div>
        <div className="dnd-container">
          <DragDrop />
        </div>
      </div>
    </>
  );
};

export default Board;
