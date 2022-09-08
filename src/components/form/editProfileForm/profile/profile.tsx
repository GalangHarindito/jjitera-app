import React, { useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

type DataProfile = {
  profile: any;
};

const ProfileForm = (props: DataProfile) => {
  const navigate = useNavigate();
  const { profile } = props;

  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(profile);
  }, [form, profile]);

  const onFinish = (values: any) => {
    const myJSON = JSON.stringify(values);
    message.success(`Changes Successful, ${myJSON}`);
  };

  const onFinishFailed = (errorInfo: any) => {
    message.error(`Changes Failed, ${errorInfo}`);
  };

  const onBack = () => {
    navigate("/");
  };
  const formItemLayout = {
    labelCol: {
      xs: { span: 8 },
      sm: { span: 8 },
      md: { span: 8 },
      lg: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 2 },
      sm: { span: 12 },
      md: { span: 12 },
      lg: { span: 8 },
    },
  };

  return (
    <div>
      {profile && (
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          initialValues={profile}
          {...formItemLayout}
          form={form}
        >
          <Form.Item
            label="name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "Please input your phone!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Website"
            name="website"
            rules={[{ required: true, message: "Please input your website!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button style={{ marginRight: "1rem" }} onClick={onBack}>
              Back
            </Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default ProfileForm;
