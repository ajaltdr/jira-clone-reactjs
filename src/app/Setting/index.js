import { Button, Form, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import "./style.css";
import { setProjectDetails, getProjectDetails } from "../../api/projectApi";

const Setting = () => {
  const [projectName, setProjectName] = useState(
    getProjectDetails().project_name
  );
  const [form] = Form.useForm();

  useEffect(() => {
    getProjectDetails();
  }, [projectName]);
  const onFinish = (values) => {
    setProjectDetails(values);
    setProjectName(getProjectDetails().project_name);
    window.location.reload(false);
  };
  return (
    <>
      <div className="setting-container">
        <div className="breadcump">
          Projects / {projectName} / Project Details
        </div>
        <h2 className="title">Project Details</h2>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={getProjectDetails()}
        >
          <Form.Item name={"project_name"} label={"Name"}>
            <Input />
          </Form.Item>
          <Form.Item name={"project_url"} label={"URL"}>
            <Input />
          </Form.Item>
          <Form.Item name={"project_description"} label={"Description"}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item name={"project_category"} label={"Project Category"}>
            <Select>
              <Select.Option value="Business">Business</Select.Option>
              <Select.Option value="Software">Software</Select.Option>
              <Select.Option value="Marketing">Marketing</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Setting;
