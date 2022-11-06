import { Button, Form, Input, Modal, Select } from "antd";
import React from "react";
import { createTicket, getItems } from "../../api";
import { getIssueType, getPrority, getUsers } from "../../utils/commonUtil";
import './style.css'
const CreateIssue = ({ showModal, setShowModal }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    createTicket(values);
    form.resetFields();
    setShowModal(false);
  };
  const handleCancel = () => {
    setShowModal(false);
  };
  return (
    <Modal
      open={showModal}
      closable={false}
      footer={false}
      onCancel={handleCancel}
      width={800}
      bodyStyle={{padding:'25px 40px'}}
    >
      <h3 style={{fontWeight:'bold'}}>Create Issue</h3>
      <div style={{marginTop:'30px'}}>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="issue_type"
            label="Issue Type"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select children={getIssueType()} />
          </Form.Item>
          <div>Start typing to get a list of possible matches.</div>
          <hr />
          <Form.Item
            name="summary"
            label="Short Summary"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <div>Concisely summarize the issue in one or two sentences.</div>
          <Form.Item
            name="description"
            label="description"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <div>Describe the issue in as much detail as you'd like.</div>
          <Form.Item
            name="reporter"
            label="Reporter"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select children={getUsers()} />
          </Form.Item>
          <Form.Item
            name="assignees"
            label="Assignees"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select children={getUsers()} />
          </Form.Item>
          <Form.Item
            name="priority"
            label="Priority"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select children={getPrority()} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Create</Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default CreateIssue;
