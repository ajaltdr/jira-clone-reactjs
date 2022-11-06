import { Select } from "antd";

import Bug from "../assests/Bug.png";
import Task from "../assests/Task.png";
import Story from "../assests/Story.png";

import Adam from "../assests/adam.png";
import Nick from "../assests/nick.png";
import Rose from "../assests/rose.png";

import High from "../assests/high.png";
import Low from "../assests/low.png";
import Medium from "../assests/medium.png";

export const getIssueType = () => {
  const issueTypeList = ["Task", "Bug", "Story"];
  return issueTypeList?.map((item, index) => {
    return (
      <Select.Option key={index} value={item} label={item}>
        <span>
          <img
            src={item === "Bug" ? Bug : item === "Story" ? Story : Task}
            style={{ marginRight: "5px", marginTop: "-3px" }}
          />
          {item}
        </span>
      </Select.Option>
    );
  });
};

export const getUsers = () => {
  const usersList = ["Adam Jones", "Nick Furry", "Evans Rose"];
  return usersList?.map((item, index) => {
    return (
      <Select.Option key={index} value={item} label={item}>
        <span>
          <img
            src={
              item === "Adam Jones" ? Adam : item === "Nick Furry" ? Nick : Rose
            }
            style={{ marginRight: "5px", marginTop: "-3px", width: "20px" }}
          />
          {item}
        </span>
      </Select.Option>
    );
  });
};

export const getPrority = () => {
  const issueTypeList = ["High", "Medium", "Low"];
  return issueTypeList?.map((item, index) => {
    return (
      <Select.Option key={index} value={item} label={item}>
        <span>
          <img
            src={item === "High" ? High : item === "Low" ? Low : Medium}
            style={{ marginRight: "5px", marginTop: "-3px" }}
          />
          {item}
        </span>
      </Select.Option>
    );
  });
};
